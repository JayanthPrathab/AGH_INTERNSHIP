import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCube,
  faSitemap ,
  faIndustry,

} from '@fortawesome/free-solid-svg-icons';
import "../css/Company.css";
const Company = () => {
  return (
    <>
      <div className="mega-menu">
        <div className="section-label">COMPANY SPECIFIC</div>

        <div className="menu-section">
          <div className="menu-items1">
            <MenuItem
              icon={<FontAwesomeIcon icon={faSitemap} />}
              title="IT Service Companies"
              subtitle="Crack top service-based IT companies"
            />
            <MenuItem
              icon={<FontAwesomeIcon icon={faCube} />}
              title="IT Product Companies"
              subtitle="Gear up for tech giants & product-based companies"
            />
            <MenuItem
              icon={<FontAwesomeIcon icon={faIndustry} />}
              title="Core Companies"
              subtitle="Sharpen your core skills for engineering job roles"
            />
          </div>
        </div>
      </div>
    </>
  );
};
const MenuItem = ({ icon, title, subtitle }) => (
  <div className="menu-item">
    <div className="icon">{icon}</div>
    <div className="text-content">
      <div className="title">{title}</div>
      <div className="subtitle">{subtitle}</div>
    </div>
  </div>
);
export default Company;
