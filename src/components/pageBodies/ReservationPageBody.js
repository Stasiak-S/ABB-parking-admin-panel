import React, {useState} from "react";
import "../styles/TablePage.css";
import "react-day-picker/style.css";
import NavBar from "../groupElements/Navbar.js";
import Pagiton from "../elements/paginator.jsx";
import GetDataRequest from "../buttons/GetData.js";

const ReservationBody=()=>{
  const page="ReservationsDates";
  const message=GetDataRequest(page);

  return (
    <div className="body">
      <NavBar Page={page}/>
      <Pagiton name="checkbox" CountPages={10} PageInfo={message} Page={page}/>
    </div>
  );
}

export default ReservationBody;