import React from "react";

function CheckBox(props){
    return (<td>
        <input type="checkbox" name={props.name} value={props.value} onChange={props.CheckBoxOnChange} id={props.id}/>
      </td>);
}
export default CheckBox;