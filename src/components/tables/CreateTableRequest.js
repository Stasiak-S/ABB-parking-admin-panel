import React, { useState, useEffect } from "react";
import NewTable from "./CreateTableRequestContent"
import Error from "../elements/Error.js";
function CreateTableRequest(props){ 
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
   {for (let i = 0; i < Object.keys(message).length; i++) 
    {if(message[i].status!=="Accepted")
  {return(
    message.map((item, index) => NewTable(item, index)));}}}
    else{
      return(
        <Error text="Chwilowo nie ma żadnych rezerwacji czekających na potwierdzenie"/>
      );
    }
}

export default CreateTableRequest;