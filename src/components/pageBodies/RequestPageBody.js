import React from "react";
import "../styles/TablePage.css";

import NavBar from "../groupElements/Navbar.js";
import CreateTableRequest from "../tables/CreateTableRequest.js";
const RequestBody = () => {
  return (
    <div className="body">
      <NavBar/>
      <CreateTableRequest/>
    </div>
  );
};

export default RequestBody;
