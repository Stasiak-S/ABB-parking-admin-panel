import { Link } from "react-router-dom";
const NavBar=()=>{
    
    return(
    <nav className="nav-bar">
        <Link to="/reservation"><li>REZERWACJE</li></Link>
        <Link to="/user"><li>UŻYTKOWNICY</li></Link>
        <Link to="/request"><li>WNIOSKI O REZERWACJĘ</li></Link>
      </nav>);
}
export default NavBar;