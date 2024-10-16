import React from "react";
import "../styles/TablePage.css";
import CreateTable from "../tables/CreateTableReservation.js"
import ButtonGroup from "../groupElements/ButtonGroup.js";
import LinkTile from "../elements/LinkTitle.js"

const ReservationBody=()=>{

  return (
    <div className="body">
        <LinkTile text="Rezerwacje"/>
      <CreateTable  name="checkbox" />
      <ButtonGroup page="reservations"/>
    </div>
  );
}

export default ReservationBody;