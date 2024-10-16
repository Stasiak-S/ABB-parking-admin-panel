import Icon1 from "../images/file.png"
import Icon2 from "../images/profile.png"
import Icon3 from "../images/envelope.png"
import { Link } from "react-router-dom";
import Image from "../elements/Image.js"
const Menu=()=>{
    
    return(
    <nav className="vertical-menu">
        <Link to="/reservation"><li><Image src={Icon1} alt="reservation"/>Rezerwacje</li></Link>
        <Link to="/user"><li><Image src={Icon2} alt="users"/>Użytkownicy</li></Link>
        <Link to="/request"><li><Image src={Icon3} alt="requests"/>Wnioski o rezerwację</li></Link>
      </nav>);
}
export default Menu;