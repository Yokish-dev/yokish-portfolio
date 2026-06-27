
import {
  FaMoon,
  FaSun,
  FaWhatsapp,
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaDownload,
} from "react-icons/fa";
import './Header.css'

const Header = ({setDarkMode,darkMode}) => {
     return (
   <header className="navbar">

  <div className="left">
    <h2 className="logo">YOKISH</h2>
  </div>

  <nav>
    <a href="#about">About</a>
    <a href="#skills">Skills</a>
    <a href="#experience">Experience</a>
    <a href="#projects">Projects</a>
    <a href="#contact">Contact</a>
  </nav>

  <div className="right">
    <button
      className="theme-btn"
      onClick={() => setDarkMode(!darkMode)}
    >
      {darkMode ? <FaSun /> : <FaMoon />}
    </button>
  </div>

</header>
     )
}

export default Header;