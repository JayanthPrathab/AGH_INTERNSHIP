import logo from "../assets/logo.jpg";
import Assessment from "./Assessment";
import Company from "./Company";
import "../css/Navbar.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronDown, faUser
} from '@fortawesome/free-solid-svg-icons';
const Navbar=()=>{
    return(
        <>
            <div className="mainnav">
            <img className="logo1" src={logo} alt="" />
            <ul className="navlist">
                <li>Home</li>
                <li>Practice</li>
                <li className="navitem">
                    <span>Assessment <FontAwesomeIcon className="chevron-icon1" icon={faChevronDown} /></span>
                    <div className="dropdown1">
                        <Assessment />
                    </div>
                </li>
                <li>LeaderBoard</li>
                <li className="navitem1">
                    <span>Company Specific <FontAwesomeIcon className="chevron-icon2" icon={faChevronDown} /></span>
                    <div className="dropdown2">
                        <Company />
                    </div>
                </li>
                
            </ul>
            <div className="user_det">
                <FontAwesomeIcon icon={faUser} />
                USER NAME
            </div>
            <button className="logout">Logout</button>
            </div>
        </>
    );
}
export default Navbar;