import React from "react";
import Button from "../elements/Button.js"
function ButtonGroup(props){   
    return (
          <div className="btn-group">
          <Button name="Dodaj" click="add" page={props.page}/>
          <Button name="Usuń" click="deleteCheckbox" page={props.page}/>
          </div>
    );
  }
  
  export default ButtonGroup;