import React from "react";
import "../styles/TablePage.css";
import CreateTable from "../tables/CreateTableUser.js"
import ButtonGroup from "../groupElements/ButtonGroup.js";
import NavBar from "../groupElements/Navbar.js";

const UserBody=()=>{

  return (
    <div>
      <div className="body">
        <NavBar/>
        <CreateTable name="checkbox"/>
        <ButtonGroup page="users"/>
      </div>
    </div>
  );
}

export default UserBody;