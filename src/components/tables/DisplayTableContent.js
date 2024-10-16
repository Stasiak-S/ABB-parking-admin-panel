import React from "react";
function DisplayContent(key, item, index) {
  if(key!=="id" & key!=="reservation_id")
    {return (
        <td key={key} id={index+key}>{item[key]}</td>
      
    );}
  
}
export default DisplayContent;