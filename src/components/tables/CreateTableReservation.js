import React, { useState, useEffect } from "react";
import NewTable from "./CreateTableContent.js";
import NewHeader from "./CreateTableHeader.js";
import Error from "../elements/Error.js";
import Button from "../elements/Button.js";
function CreateTable(props){
  const page="reservations"
  const [message, setMessage] = useState([{}]);

  useEffect(() => {
    const getData = async () => {
      const url = "http://localhost:5000/admin/get/allReservationsDates";
  
      try {
        const resp = await fetch (url);
        const data = await resp.json();
        setMessage(data.result);
      } catch (err) {
        console.error(err);
      }
    }
  
    getData();
  }, []);
if(Object.keys(message).length!==0)  
    {const DisplayContents =message.map((item, index) => NewTable(item, index, props.name, props.CheckBoxOnChange, page));
    const DisplayHeaders= Object.keys(message[0]).map((key) =>NewHeader(key)); 
    return(
      <div>
    <table className="table" id="MyTable">
          <thead>
            <tr>
              <th></th>
              {DisplayHeaders}
              <th><Button name="Filtruj"/></th>
            </tr>
          </thead>
          <tbody>{DisplayContents}</tbody>
        </table>
        </div>
        );}
else{
  return(
    <Error text="Chwilowo nie ma żadnej rezerwacji"/>
  );
}
}
export default CreateTable