import React from "react";
import "../styles/TablePage.css";
import CreateTable from "../tables/CreateTableUser.js"
import LinkTile from "../elements/LinkTitle.js"
import ButtonGroup from "../groupElements/ButtonGroup.js";


const UserBody=()=>{

  return (
    <div>
      <div className="body">
        <LinkTile text="Użytkownicy"/>
        <CreateTable name="checkbox"/>
        <ButtonGroup page="users"/>
      </div>
    </div>
  );
}

export default UserBody;