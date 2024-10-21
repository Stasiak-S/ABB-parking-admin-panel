import { Link } from "react-router-dom";
function NavBar(props){
    function BoldLetters({linked, name, text}){
      if(name===props.Page){return <Link to={linked}><li id={name}><b>{text}</b></li></Link>}
      else{return <Link to={linked}><li id={name}>{text}</li></Link>}
      
    }
    return(
    <nav className="nav-bar">
        <BoldLetters linked="/reservation"
        name="ReservationsDates"
        text="REZERWACJE"/>
        <BoldLetters linked="/user"
        name="Users"
        text="UŻYTKOWNICY"/>
        <BoldLetters linked="/request"
        name="ReservationsDates2"
        text="WNIOSKI O REZERWACJĘ"/>
      </nav>);
}
export default NavBar;