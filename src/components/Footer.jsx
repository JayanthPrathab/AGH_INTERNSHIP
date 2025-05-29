import "../css/Footer.css";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaLinkedinIn,
  FaTimes,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <p>© 2025 All Right Reserved By AGH</p>
      <div className="social">
        <span>Follow Us</span>
        <a href="https://instagram.com" target="_blank" rel="noreferrer">
          <FaInstagram />
        </a>
        <a href="https://facebook.com" target="_blank" rel="noreferrer">
          <FaFacebookF />
        </a>
        <a href="https://youtube.com" target="_blank" rel="noreferrer">
          <FaYoutube />
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noreferrer">
          <FaLinkedinIn />
        </a>
        <a href="#">
          <FaTimes />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
