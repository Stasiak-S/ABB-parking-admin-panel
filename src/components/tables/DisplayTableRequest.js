import React from "react";
function Display(key, item) {
  if (key === "email") {
    return (
      <tr>
        <th key={key} className="requestLeft" colSpan="2">
          {item[key]}
        </th>
      </tr>
    );
  }
  else {
    return (
      <tr>
        <td key={key} className="requestLeft">
          {key}
        </td>
        <td className="requestRight">{item[key]}</td>
      </tr>
    );
  }
}
export default Display;