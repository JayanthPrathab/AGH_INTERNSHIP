import Assessment from "./Assessment";
import Company from "./Company";
import home from "../assets/home.png";
import company from "../assets/company.png";
import leader from "../assets/leader.png";
import assess from "../assets/assess.png";
import practice from "../assets/practice.png";
import profile from "../assets/profile.png";
import model from "../assets/model.png";
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
          <img
            src={model}
            alt="User"
            style={{ borderRadius: "50%", width: "70px", height: "70px" }}
          />
          <div className="user_det">
            Muskan Verma
          </div>
          <div className="educ">GEC Bilaspur</div>
        </div>
      <ul className="sidebar-navlist">
        <li><div className="sidebar-contents"><img className="sidebar-img" src={home} />Home</div></li>
        <li><div className="sidebar-contents"><img className="sidebar-img" src={practice} />Practice</div></li>
        <li
          className="navitem"
          onClick={() => setShowAssessment(!showAssessment)}
        >
          <div className="sidebar-contents"><img className="sidebar-img" src={assess} />
            Assessment <FontAwesomeIcon icon={faChevronDown} />
         
          {showAssessment && (
            <div className="dropdown1">
              <Assessment />
            </div>
          )}</div>
        </li>
        <li><div className="sidebar-contents"><img className="sidebar-img" src={leader} />LeaderBoard</div></li>
        <li className="navitem1" onClick={() => setShowCompany(!showCompany)}>
          <div className="sidebar-contents"><img className="sidebar-img" src={company} />
            Company Specific <FontAwesomeIcon icon={faChevronDown} />
          {showCompany && (
            <div className="dropdown2">
              <Company />
            </div>
          )}</div>
        </li>
        <li><div className="sidebar-contents"><img className="sidebar-img" src={profile} />Profile</div></li>
      </ul>
      <button className="logout-sidebar">
        <div className="logoutdiv">
          Logout <FontAwesomeIcon icon={faSignOut} />
        </div>
      </button>
    </div>
  );
};
export default Sidebar;
