import "../css/Community.css";
import icon from "../assets/icon.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faCommentAlt,
  faShareAlt,
} from "@fortawesome/free-solid-svg-icons";
const Community = () => {
  return (
    <>
      <div className="community-section">
        <h3 className="community-title">Community Highlights</h3>
        <div className="community-card">
          <div className="card-header">
            <div className="profile-section">
              <img src={icon} alt="profile" className="profile-pic" />
              <div>
                <div className="name">Michael Brown</div>
                <div className="time">2 Hours Ago</div>
              </div>
            </div>
            <div className="badge">Instructor</div>
          </div>
          <div className="card-content">
            Just published a new tutorial on React Hooks! Check it out and let
            me know what you think. This covers useState, useEffect, useContext,
            and custom hooks with practical examples.
          </div>
          <hr />
          <div className="card-actions">
            <span>
              <FontAwesomeIcon icon={faHeart} /> 23
            </span>
            <span>
              <FontAwesomeIcon icon={faCommentAlt} /> 5
            </span>
            <span>
              <FontAwesomeIcon icon={faShareAlt} /> 7
            </span>
          </div>
        </div>
      </div>
    </>
  );
};
export default Community;
