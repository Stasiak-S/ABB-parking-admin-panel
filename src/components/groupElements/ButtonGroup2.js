import React from "react";
import Button from "../elements/Button.js"
const ButtonGroup=()=>{

    return (
      <tr className="btn-group-new">
      <td>
      <Button name="Zatwierź"/>
      </td>
      <td>
      <Button name="Odrzuć"/>
      </td>
    </tr>
    );
  }
  
  export default ButtonGroup;