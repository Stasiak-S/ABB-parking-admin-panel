import { Link } from "react-router-dom";
const Menu=()=>{
    
    return(
    <nav className="vertical-menu">
        <Link to="/reservation"><li>Rezerwacje</li></Link>
        <Link to="/user"><li>Użytkownicy</li></Link>
        <Link to="/request"><li>Wnioski o rezerwację</li></Link>
      </nav>);
}
export default Menu;