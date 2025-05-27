import "../css/Assessment.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBook,
  faLaptop,
  faGlobe,
  faGraduationCap,
  faClipboardCheck
} from '@fortawesome/free-solid-svg-icons';
const Assessment = () => {
  return (
    <>
      <div className="mega-menu">
        <div className="section-label">ASSESSMENT</div>

        <div className="menu-section">
          <div className="menu-title">Aptitude</div>
          <div className="menu-items">
            <MenuItem
              icon={<FontAwesomeIcon icon={faClipboardCheck} />}
              title="Quiz"
              subtitle="Quick Aptitude Test"
            />
            <MenuItem
              icon={<FontAwesomeIcon icon={faBook} />}
              title="E-Learning"
              subtitle="Learn aptitude basics"
            />
          </div>
        </div>

        <div className="menu-section">
          <div className="menu-title">Technical</div>
          <div className="menu-items">
            <MenuItem
              icon={<FontAwesomeIcon icon={faLaptop} />}
              title="Technical Quiz"
              subtitle="Test Technical skills"
            />
            <MenuItem
              icon={<FontAwesomeIcon icon={faGlobe} />}
              title="Tech E-Learning"
              subtitle="Learn core concepts"
            />
          </div>
        </div>

        <div className="section-label">COLLEGE ASSESSMENT</div>
        <MenuItem
          icon={<FontAwesomeIcon icon={faGraduationCap} />}
          title="Aptitude"
          subtitle="College-level test"
        />
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
export default Assessment;
