import React, { useState, useEffect } from "react";
import GetData from "../functions/GetData";
import DeleteCheckboxData from "../functions/DeleteCheckbox";
import DeleteData from "../functions/Delete";
import EditData from "../functions/Edit";
import AddData from "../functions/Add";
function Button(props){
  const [Data, setMessage] = useState([{}]);
  
  useEffect(() => {
    const getData = async () => {
      const url = "http://localhost:5000/admin/get/all"+props.page;
  if(props.page!=null)
    {  try {
        const resp = await fetch (url);
        const data = await resp.json();
        setMessage(data.result);
      } catch (err) {
        console.error(err);
      }
    }}
  
    getData();
  }, [props.page]);
    function Event(){
      if(props.click==="edit")
            {Edit() }
        else if(props.click==="delete")
            {Delete()}
        else if(props.click==="add")
            {Add()
            }
        else if(props.click==="deleteCheckbox")
            {DeleteCheckbox()}
        window.location.reload(); 
    }

    function Edit(){
      EditData(props.page, Data, props.value)   
  }
  function Delete(){
    if (window.confirm('Czy napewno chcesz usunąć dane?')) {
    DeleteData(props.page, Data, props.value)
    }
}

function Add(){
      AddData(props.page)
}
function DeleteCheckbox(){
      if (window.confirm('Czy napewno chcesz usunąć dane?')) {
    DeleteCheckboxData(props.page, Data)
      }
}


    return (<button className="button" onClick={Event} page={props.page} id={props.id} value={props.value}>{props.name}</button>);
}
export default Button;