import React from "react";
import "../styles/TablePage.css";
import NavBar from "../groupElements/Navbar.js";
import Pagiton from "../elements/paginator.jsx";
import GetData from "../buttons/GetDataRequest.js";
const RequestBody = () => {
  const page="ReservationsDates2"
  const message=GetData("ReservationsDates")

  return (
    <div className="body">
      <NavBar Page={page}/>
      <Pagiton name="checkbox" CountPages={10} PageInfo={message} Page={page}/>
    </div>
  );
};

export default RequestBody;
