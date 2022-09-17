import React from "react";
import "./Footer.css";
import Wave from "../../img/wave.png";
import Github from "@iconscout/react-unicons/icons/uil-github";
import LinkedIn from "@iconscout/react-unicons/icons/uil-linkedin";
import Instagram from "@iconscout/react-unicons/icons/uil-instagram";

const Footer = () => {
  return (
    <div className="footer">
      <img src={Wave} alt="" style={{ width: "100%" }} />
      <div className="f-content">
        <span>sammyrobbins00@gmail.com</span>
        <div className="f-icons">
          <a
            href="https://github.com/rabinsneupane"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github color="white" size="3rem" />
          </a>
          <a
            href="https://www.linkedin.com/in/rabins-neupane-0a25991b2/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedIn color="white" size="3rem" />
          </a>
          <a
            href="https://www.instagram.com/rabinsneupane/?hl=en"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Instagram color="white" size="3rem" />
          </a>
        </div>
      </div>
      <p>© 2022 sammyrobbins. All rights reserved.</p>
    </div>
  );
};

export default Footer;
