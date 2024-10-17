import React from "react";
import NewTable from "./CreateTableContent.js";
import NewHeader from "./CreateTableHeader.js";
import Error from "../elements/Error.js";
import Button from "../elements/Button.js";
function CreateTable(props){
if(Object.keys(props.message).length!==0)  
    {const DisplayContents =props.message.map((item, index) => NewTable(item, index, props.name, props.CheckBoxOnChange, props.page));
    const DisplayHeaders= Object.keys(props.message[0]).map((key) =>NewHeader(key)); 
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