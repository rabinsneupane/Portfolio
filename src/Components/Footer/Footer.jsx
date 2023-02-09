import React from "react";
import { AiFillGithub, AiFillInstagram } from "react-icons/ai";
import { RiLinkedinBoxFill } from "react-icons/ri";
import Wave from "../../img/wave.webp";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <img src={Wave} alt="" style={{ width: "100%" }} />
      <div className="f-content">
        <span>sammyrobbins00@gmail.com</span>
        <div className="f-icons">
          <a
            href="https://github.com/robbinsneupane"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiFillGithub className="img" />
          </a>
          <a
            href="https://www.linkedin.com/in/robbinsneupane"
            target="_blank"
            rel="noopener noreferrer"
          >
            <RiLinkedinBoxFill className="img" />
          </a>
          <a
            href="https://www.linkedin.com/in/robbinsneupane"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiFillInstagram className="img" />
          </a>
        </div>
      </div>
      <p>© 2022 sammyrobbins. All rights reserved.</p>
    </div>
  );
};

export default Footer;
