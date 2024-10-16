import React from "react";
import "../styles/TablePage.css";
import LinkTile from "../elements/LinkTitle.js"
import CreateTableRequest from "../tables/CreateTableRequest.js";
const RequestBody = () => {
  return (
    <div className="body">
      <LinkTile text="Wnioski o rezerwację"/>
      <CreateTableRequest/>
    </div>
  );
};

export default RequestBody;
