
import Display from "./DisplayTableRequest";
import React from "react";
import ButtonGroup from "../groupElements/ButtonGroup2";
function NewTable(item, index){
return (
  <div>
    <table className="request" key={index}>
      {Object.keys(item).map((key) => Display(key, item))}
      <ButtonGroup/>
    </table>
    <br />
  </div>
);
};
export default NewTable;