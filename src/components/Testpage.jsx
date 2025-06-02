import prof from "../assets/model.png";
import "../css/Testpage.css";
import black from "../assets/blacklogo.png";
import number from "../assets/numbers.png";
import percent from "../assets/percentage.png";
import arith from "../assets/arithmetic.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronDown,
  faChevronUp,
  faSignOut,
  faLock,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const Testpage = () => {
  const [selected, setSelected] = useState("Aptitude");
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);

  const [isNumberExpanded, setIsNumberExpanded] = useState(false);
  const categories = ["Aptitude", "Logical", "Verbal"];
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [selectedTopic, setSelectedTopic] = useState("Divisibility Rules");

  const numberSystemSubItems = [
    { title: "Divisibility Rules", locked: false },
    { title: "Prime Numbers", locked: false },
    { title: "Factors & Multiples", locked: true },
    { title: "HCF & LCM", locked: false },
    { title: "Fractions & Decimals", locked: true },
    { title: "Integers", locked: true },
  ];

  return (
    <>
      <div style={{ display: "flex" }}>
        {/* Sidebar */}

        <div
          className={`quiz_sidebar ${isSidebarVisible ? "visible" : "hidden"}`}
        >
          <div
            className="sidebar_toggle_inside"
            onClick={() => setIsSidebarVisible(false)}
          >
            : : :
          </div>
          <div className="logo_section">
            <img src={black} alt="Logo" className="logo_icon" />
          </div>

          <div className="quiz_menu_label">APTITUDE</div>

          <div
            className="quiz_menu_item expandable"
            onClick={() => setIsNumberExpanded(!isNumberExpanded)}
          >
            <img className="submenu_icon1" src={number} alt="" />
            Number System
            <FontAwesomeIcon
              icon={isNumberExpanded ? faChevronUp : ""}
              className="expand_icon"
            />
          </div>

          {isNumberExpanded && (
      <div className="submenu">
        {numberSystemSubItems.map((item, index) => (
          <div
            key={index}
            className={`submenu_item ${
              !item.locked && hoveredIndex === index ? "hovered" : ""
            }`}
            onMouseEnter={() => !item.locked && setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            onClick={() => {
              if (!item.locked) setSelectedTopic(item.title);
            }}
          >
            {item.title}
            {item.locked && (
              <FontAwesomeIcon icon={faLock} className="lock_icon" />
            )}
          </div>
        ))}
      </div>
    )}

          <div className="quiz_menu_item">
            <img className="submenu_icon" src={percent} alt="" />
            Percentage
          </div>

          <div className="quiz_menu_item">
            <img className="submenu_icon" src={arith} alt="" />
            Arithmetic
          </div><br /> <br /><br />
        </div>

        {/* Main Test Content */}
        <div style={{ flex: 1 }}>
          <div className="main_test">
            <div className="back_button">
              <FontAwesomeIcon icon={faChevronLeft} />
              Back
            </div>
            <div className="user_det">
              <img
                style={{ borderRadius: "50%", width: "50px", height: "50px" }}
                src={prof}
                alt=""
              />
              <span className="user_name">Muskan Verma</span>
              <button className="logout_button">
                Logout <FontAwesomeIcon icon={faSignOut} />
              </button>
            </div>
          </div>

          <div style={{ display: "flex", justifyContent: "center" }}>
            <div className="category">
              {categories.map((cat) => (
                <div
                  key={cat}
                  className={`cat_item ${selected === cat ? "selected" : ""}`}
                  onClick={() => setSelected(cat)}
                >
                  {cat}
                </div>
              ))}
            </div>
          </div>
          <div className="center_content">
            <h2 className="test_heading">{selectedTopic}</h2>
            <p className="test_details">
              No. of Questions <strong>15</strong> | Duration{" "}
              <strong>15 Minutes</strong> | Total Marks <strong>15</strong>
            </p>
            <button className="start_test_button">Start Test</button>
          </div>
          {!isSidebarVisible && (
            <div
              className="sidebar_toggle"
              onClick={() => setIsSidebarVisible(true)}
            >
              : : :
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Testpage;
