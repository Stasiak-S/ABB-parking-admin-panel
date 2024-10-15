import React from "react";
import Image from "./Image.js"
import { Link } from "react-router-dom";
import BackIcon from "../images/back.png";

function Title(props){
    return (<h1 className="title">
        <Link to="/">
        <Image src={BackIcon} alt="GoBack"/>
        </Link>{props.text}</h1>);
}
export default Title;