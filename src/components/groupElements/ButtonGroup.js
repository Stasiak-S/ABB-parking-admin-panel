import React from "react";
import AddData from "../buttons/Add";
import DeleteCheckboxData from "../buttons/DeleteCheckbox.js";
import AcceptCheckboxData from "../buttons/AcceptCheckBox.js";
function ButtonGroup(props){  
      if(props.isRequest&&!props.isDisabled){
            return (
            <div className="btn-group">
            <AcceptCheckboxData name="Akceptuj" page={props.page}/>
            <DeleteCheckboxData name="Odmów" page={props.page}/>
            </div>
            );
      }
      else if(props.isDisabled){
    return (
          <div className="btn-group">
          <AddData name="Dodaj" page={props.page}/>
          </div>
    );
}
      return (
            <div className="btn-group">
            <AddData name="Dodaj" page={props.page}/>
            <DeleteCheckboxData name="Usuń" page={props.page}/>
            </div>)

  }
  
  export default ButtonGroup;