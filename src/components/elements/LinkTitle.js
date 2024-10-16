import React from "react";
import Image from "./Image.js"
import { Link } from "react-router-dom";
import BackIcon from "../images/back.png";

function Title(props){
    return (<h1 className="title">{props.text}</h1>);
}
export default Title;