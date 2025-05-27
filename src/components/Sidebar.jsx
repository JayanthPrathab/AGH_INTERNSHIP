import Assessment from "./Assessment";
import Company from "./Company";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronDown,
  faUser,
  faSignOut,
} from "@fortawesome/free-solid-svg-icons";
import "../css/Sidebar.css";
const Sidebar = ({ isOpen, onClose }) => {
      const [showAssessment, setShowAssessment] = useState(false);
  const [showCompany, setShowCompany] = useState(false);
  return (
    <div className={`sidebar ${isOpen ? "open" : ""}`}>
      <div className="sidebar-header">
        <div className="user_det">
          <FontAwesomeIcon icon={faUser} />
          USER NAME
        </div>
        <button className="logout">
          <div className="logoutdiv">
            Logout <FontAwesomeIcon icon={faSignOut} />
          </div>
        </button>
        <button className="close-btn" onClick={onClose}>×</button>
      </div>
      <ul className="sidebar-navlist">
        <li>Home</li>
        <li>Practice</li>
        <li className="navitem" onClick={() => setShowAssessment(!showAssessment)}>
          <span>
            Assessment <FontAwesomeIcon icon={faChevronDown} />
          </span>
          { showAssessment &&<div className="dropdown1">
            <Assessment />
          </div>}
        </li>
        <li>LeaderBoard</li>
        <li className="navitem1" onClick={() => setShowCompany(!showCompany)}>
          <span>
            Company Specific <FontAwesomeIcon icon={faChevronDown} />
          </span>
          {showCompany && <div className="dropdown2">
            <Company />
          </div>}
        </li>
      </ul>
    </div>
  );
};
export default Sidebar;
