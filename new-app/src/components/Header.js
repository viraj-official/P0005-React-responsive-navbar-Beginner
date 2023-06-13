import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Header.css";
import { Link } from "react-router-dom";

function Header() {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  return (
    <div className="navbar">
      <header>
        <Link to="/">
          <img
            className="header_logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/GitLab_logo.svg/2560px-GitLab_logo.svg.png"
            alt="header_logo"
          />
        </Link>

        <nav ref={navRef}>
          <Link t onClick={showNavbar} o="/" className="nav-element">
            <p>Home</p>
          </Link>

          <Link onClick={showNavbar} to="/dashboard" className="nav-element">
            <p>Dashboard</p>
          </Link>

          <Link onClick={showNavbar} to="/projects" className="nav-element">
            <p>Projects</p>
          </Link>

          <Link onClick={showNavbar} to="/about" className="nav-element">
            <p>About</p>
          </Link>

          <button className="nav-btn nav-close-btn" onClick={showNavbar}>
            <FaTimes />
          </button>
        </nav>
        <button className="nav-btn" onClick={showNavbar}>
          <FaBars />
        </button>
      </header>
    </div>
  );
}

export default Header;
