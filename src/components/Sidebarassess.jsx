import "../css/Sidebarassess.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faUser,
  faGlobe,
  faGraduationCap,
  faLaptopCode,
  faBookOpen,
  faListCheck
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
const Sidebarassess = ({isOpen, onBack }) => {
    console.log("Assessment sidebar mounted!");
  return (
    <>
       <div className={`assessment-sub-sidebar ${isOpen ? "open" : ""}`}>
        <div className="sidebar-header">
          <button className="back-btn" onClick={onBack}>
            <FontAwesomeIcon icon={faChevronLeft} /> Assessment
          </button>
        </div>
        <div className="assessment-group">
        <h5>Aptitude</h5>
        <div className="assessment-item">
          <FontAwesomeIcon icon={faListCheck} className="assessment-icon" />
          <div className="it1">
            <strong>Quiz</strong>
            <div className="desc">Quick Aptitude Test</div>
          </div>
        </div>
        <div className="assessment-item">
          <FontAwesomeIcon icon={faBookOpen} className="assessment-icon" />
          <div className="it1">
            <strong>E-Learning</strong>
            <div className="desc">Learn aptitude basics</div>
          </div>
        </div>
      </div>

      <div className="assessment-group">
        <h5>Technical</h5>
        <div className="assessment-item">
          <FontAwesomeIcon icon={faLaptopCode} className="assessment-icon" />
          <div className="it1">
            <strong>Technical Quiz</strong>
            <div className="desc">Test Technical skills</div>
          </div>
        </div>
        <div className="assessment-item">
          <FontAwesomeIcon icon={faGlobe} className="assessment-icon" />
          <div className="it1">
            <strong>Tech E-Learning</strong>
            <div className="desc">Learn core concepts</div>
          </div>
        </div>
      </div>

      <div className="assessment-group">
        <h5>College Assessment</h5>
        <div className="assessment-item">
          <FontAwesomeIcon icon={faGraduationCap} className="assessment-icon" />
          <div className="it1">
            <strong>Aptitude</strong>
            <div className="desc">College-level test</div>
          </div>
        </div>
      </div>
      </div>
    </>
  );
};
export default Sidebarassess;
