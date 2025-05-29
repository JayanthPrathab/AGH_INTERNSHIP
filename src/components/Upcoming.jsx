import { FaBell, FaRegClock } from "react-icons/fa";
import "../css/Upcoming.css";
const Upcoming = () => {
  return (
    <>
      <div className="feat_title">Upcoming Events</div>
      <div className="webinar-card">
        <div className="webinar-date">
          <span className="webinar-month">APR</span>
          <span className="webinar-day">05</span>
        </div>
        <div className="webinar-info">
          <h4 className="webinar-title">
            Live Webinar: Machine Learning Fundamentals
          </h4>
          <p className="webinar-desc">
            Join our expert panel for an introduction to machine learning
            concepts and applications.
          </p>
          <div className="webinar-time">
            <FaRegClock className="clock-icon" /> 10:00 AM – 12:00 PM
          </div>
        </div>
        <div className="webinar-action">
          <button className="remind-btn">
            <FaBell className="bell-icon" />
            Remind Me
          </button>
        </div>
      </div>
      <div className="webinar-card">
        <div className="webinar-date">
          <span className="webinar-month">APR</span>
          <span className="webinar-day">09</span>
        </div>
        <div className="webinar-info">
          <h4 className="webinar-title">
            Live Webinar: Machine Learning Fundamentals
          </h4>
          <p className="webinar-desc">
            Join our expert panel for an introduction to machine learning
            concepts and applications.
          </p>
          <div className="webinar-time">
            <FaRegClock className="clock-icon" /> 10:00 AM – 12:00 PM
          </div>
        </div>
        <div className="webinar-action">
          <button className="remind-btn">
            <FaBell className="bell-icon" />
            Remind Me
          </button>
        </div>
      </div>
    </>
  );
};
export default Upcoming;
