import React, { useEffect, useRef, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";
import Toggle from "../Toggle/Toggle";
import "./Navbar.css";
import Logo from "./RN.svg";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [stickyNav, setStickyNav] = useState(false);

  let menuRef = useRef();

  useEffect(() => {
    window.onscroll = () => {
      setStickyNav(window.pageYOffset === 0 ? false : true);
      return () => (window.onscroll = null);
    };

    let handler = (event) => {
      if (!menuRef.current.contains(event.target)) {
        setToggle(false);
      }
    };

    document.addEventListener("mousedown", handler);
    return () => {
      document.removeEventListener("mousedown", handler);
    };
  }, []);

  return (
    <div className={stickyNav ? "n-wrapper fixed" : "n-wrapper"} id="Navbar">
      <img src={Logo} alt="" />
      <Toggle />

      <div ref={menuRef} className={toggle ? "n-links-mobile " : "n-links"}>
        <ul onClick={() => setToggle(false)}>
          <Link
            spy={true}
            to="Intro"
            smooth={true}
            offset={-100}
            activeClass="activeClass"
          >
            <li>Home</li>
          </Link>
          <Link spy={true} to="Services" smooth={true} offset={-200}>
            <li>Services</li>
          </Link>
          <Link spy={true} to="Experience" smooth={true} offset={-200}>
            <li>Experience</li>
          </Link>
          <Link spy={true} to="Projects" smooth={true} offset={-100}>
            <li>Projects</li>
          </Link>
          <Link spy={true} to="Testimonials" smooth={true} offset={-200}>
            <li>Testimonials</li>
          </Link>
        </ul>
        <Link to="contact" spy={true} smooth={true} offset={-300}>
          <button className="button n-button">Contact</button>
        </Link>
      </div>
      <button className="nav-btn" onClick={() => setToggle(!toggle)}>
        {toggle ? <FaTimes /> : <FaBars />}
      </button>
    </div>
  );
};

export default Navbar;
