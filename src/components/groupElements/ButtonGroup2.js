import React, { useState, useEffect } from "react";
import Button from "../elements/Button.js"
const ButtonGroup=()=>{
  const [message, setMessage] = useState([{}]);
  useEffect(() => {
    const getData = async () => {
      const url = "http://localhost:5000/admin/get/allReservationsDates";
  
      try {
        const resp = await fetch (url);
        const data = await resp.json();
        for (let i = 0; i < Object.keys(data.result).length; i++) 
          {if(data.result[i].status!=="Accepted"){
        setMessage(data.result);}}
      } catch (err) {
        console.error(err);
      }
    }
    getData();
  }, []);
  function Accept(){
    for (var i = 0; i <  Object.keys(message).length; i++) {
    fetch('http://localhost:5000/admin/post/receiveUpdateData', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
            table:"reservations_dates",
            reservation_date_id:message[i].id,
            reservation_date_date_of_reservation:message[i].date_of_reservation,
            reservation_date_reservation_id:message[i].reservation_id,
            reservation_date_status_id:1
      }),
    })
    .then(function (response) {
      console.log(response.json());
})
.catch(function (error) {
      console.log(error);
});

}}
function Deny(){
  for (var i = 0; i <  Object.keys(message).length; i++) {
    console.log(message[i].id)
    fetch('http://localhost:5000/admin/post/receiveRemoveData', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
            table:"reservations",
            id:message[i].id
      }),
})
.then(function (response) {
    console.log(response);
})
.catch(function (error) {
    console.log(error);
});
  }}

    return (
      <tr className="btn-group-new">
      <td>
      <Button name="Zatwierdź" click={Accept}/>
      </td>
      <td>
      <Button name="Odrzuć" click={Deny}/>
      </td>
    </tr>
    );
  }
  
  export default ButtonGroup;