import logo from "../assets/logo.jpg";
import Assessment from "./Assessment";
import Company from "./Company";
import "../css/Navbar.css";
import Sidebar from "./Sidebar";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronDown,
  faUser,
  faBars,
  faSignOut,
} from "@fortawesome/free-solid-svg-icons";
const Navbar = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  return (
    <>
      <div className="mainnav">
        <div className="log_ham">
          <div className="ham">
            <FontAwesomeIcon
              onClick={() => setSidebarOpen(!isSidebarOpen)}
              icon={faBars}
            />
          </div>
          <img className="logo1" src={logo} alt="" />
        </div>
        <ul className="navlist">
          <li>Home</li>
          <li>Practice</li>
          <li className="navitem">
            <span>
              Assessment{" "}
              <FontAwesomeIcon className="chevron-icon1" icon={faChevronDown} />
            </span>
            <div className="dropdown1">
              <Assessment />
            </div>
          </li>
          <li>LeaderBoard</li>
          <li className="navitem1">
            <span>
              Company Specific{" "}
              <FontAwesomeIcon className="chevron-icon2" icon={faChevronDown} />
            </span>
            <div className="dropdown2">
              <Company />
            </div>
          </li>
        </ul>
        <div className="invisible">
          <div className="user_det">
            <FontAwesomeIcon icon={faUser} />
            USER NAME
          </div>
          <button className="logout">
            <div className="logoutdiv">
              Logout <FontAwesomeIcon icon={faSignOut} />
            </div>
          </button>
        </div>
      </div>
      <Sidebar isOpen={isSidebarOpen} onClose={() => setSidebarOpen(false)} />
    </>
  );
};
export default Navbar;
