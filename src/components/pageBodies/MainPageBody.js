import React from "react";
import "../styles/MainPage.css";
import Menu from "../groupElements/Menu.js"
import Title from "../elements/Title.js"
const MainBody = () => {
  return (
    
    <div className="body">
      <Title text="Strona Główna"/>
      <Menu/>
    </div>
  )
}

export default MainBody;