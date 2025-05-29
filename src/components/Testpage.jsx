import prof from "../assets/model.png";
import "../css/Testpage.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faUser,
  faBars,
  faSignOut,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
const Testpage = () => {
  const [selected, setSelected] = useState("Aptitude");
  const categories = ["Aptitude", "Logical", "Verbal"];
  return (
    <>
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
    </>
  );
};
export default Testpage;
