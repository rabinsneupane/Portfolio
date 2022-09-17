import React from "react";
import "./Intro.css";
import Github from "../../img/github.png";
import LinkedIn from "../../img/linkedin.png";
import Instagram from "../../img/instagram.png";
import { themeContext } from "../../Context";
import { useContext } from "react";
import {motion} from "framer-motion"

const Intro = () => {

  const transition = {duration: 2, type:"spring"}
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="intro">
      <div className="i-left">
        <div className="i-name">
          <span style ={{color:darkMode? "white" : ""}}>Hi! I am</span>
          <span>Sammy Robbins</span>
          <span>
            Frontend Designer and Develper with high level of experience in web
            desigiing and developmet, prdoucting the quality works.
          </span>
        </div>
        <button className="button i-button">Hire me</button>
        <div className="i-icons">
          <a
            href="https://github.com/rabinsneupane"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={Github} alt="Github icon" />
          </a>
          <a
            href="https://www.linkedin.com/in/rabins-neupane-0a25991b2/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={LinkedIn} alt="LinkedIn icon" />
          </a>
          <a
            href="https://www.instagram.com/rabinsneupane/?hl=en"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={Instagram} alt="Instagram icon" />
          </a>
        </div>
      </div>

      <div className="i-right"></div>
    </div>
  );
};

export default Intro;
