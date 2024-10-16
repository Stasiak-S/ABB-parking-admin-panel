import React from "react";
import "../styles/TablePage.css";
import CreateTable from "../tables/CreateTableReservation.js"
import ButtonGroup from "../groupElements/ButtonGroup.js";
import NavBar from "../groupElements/Navbar.js";


const ReservationBody=()=>{

  return (
    <div className="body">

      <NavBar/>

      <CreateTable  name="checkbox" />
      <ButtonGroup page="reservations"/>
    </div>
  );
}

export default ReservationBody;