import React from "react";
function Display(key, item) {
    return (
      <tr>
        <td key={key} className="requestLeft">
          {key}
        </td>
        <td className="requestRight">{item[key]}</td>
      </tr>
    );
  
}
export default Display;