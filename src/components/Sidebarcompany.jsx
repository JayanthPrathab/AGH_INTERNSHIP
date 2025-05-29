import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCube,
  faSitemap,
  faIndustry,
  faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";
import "../css/Sidebarcompany.css";
const Sidebarcompany = ({ isOpen, onBack }) => {
  return (
    <>
      <div className={`company_sidebar1 ${isOpen ? "open" : ""}`}>
        <div className="sidebar-header">
          <button className="back-btn" onClick={onBack}>
            <FontAwesomeIcon icon={faChevronLeft} /> Company Specific
          </button>
        </div>
        <div className="assessment-group">
          <div className="assessment-item">
            <FontAwesomeIcon icon={faSitemap} className="assessment-icon" />
            <div className="it1">
              <strong>IT Service Companies</strong>
              <div className="desc">Crack top service-based IT companies</div>
            </div>
          </div>
          <div className="assessment-item">
            <FontAwesomeIcon icon={faCube} className="assessment-icon" />
            <div className="it1">
              <strong>IT Product Companies</strong>
              <div className="desc">Gear up for tech giants & product-based companies</div>
            </div>
          </div>
          <div className="assessment-item">
            <FontAwesomeIcon icon={faIndustry} className="assessment-icon" />
            <div className="it1">
              <strong>Core Companies</strong>
              <div className="desc">Sharpen your core skills for engineering job roles</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Sidebarcompany;
