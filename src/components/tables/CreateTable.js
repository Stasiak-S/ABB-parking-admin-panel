import React from "react";
import NewTable from "./CreateTableContent.js";
import NewHeader from "./CreateTableHeader.js";
function CreateTable(props){

    
const DisplayContents =props.message.map((item, index) => NewTable(item, index, props.name, props.CheckBoxOnChange, props.page));
    const DisplayHeaders= Object.keys(props.message[0]).map((key) =>NewHeader(key)); 
    return(
      <div>
    <table className="table" id="MyTable">
          <thead>
            <tr>
              <th></th>
              {DisplayHeaders}
              <th></th>
            </tr>
          </thead>
          <tbody>{DisplayContents}</tbody>
        </table>
        </div>
        );
}
export default CreateTable