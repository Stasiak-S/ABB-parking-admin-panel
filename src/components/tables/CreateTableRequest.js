import React, { useState, useEffect } from "react";
import NewTable from "./CreateTableRequestContent"
import Error from "../elements/Error.js";
function CreateTableRequest(){ 
  const [message, setMessage] = useState([{}]);

  useEffect(() => {
    const getData = async () => {
      const url = "http://localhost:5000/admin/get/allReservations";
  
      try {
        const resp = await fetch (url);
        const data = await resp.json();
        setMessage(data);
      } catch (err) {
        console.error(err);
      }
    }
  
    getData();
  }, []);
  if(Object.keys(message).length!==0)  
   {
  return(
    message.map((item, index) => NewTable(item, index)));}
    else{
      return(
        <Error text="Chwilowo nie ma żadnych rezerwacji czekających na potwierdzenie"/>
      );
    }
}

export default CreateTableRequest;