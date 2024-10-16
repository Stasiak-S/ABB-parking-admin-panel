import Display from "./DisplayTableRequest";
import React from "react";
import ButtonGroup from "../groupElements/ButtonGroup2";
function NewTable(item, index){
return (
  <div>
    <table className="request" key={index} id="MyTable">
      <tbody>
      {Object.keys(item).map((key) => Display(key, item))}
      <ButtonGroup/>
      </tbody>
    </table>
    <br />
  </div>
);
};
export default NewTable;