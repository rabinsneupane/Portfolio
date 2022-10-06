import React from "react";
import "./Intro.css";
import Github from "../../img/github.png";
import LinkedIn from "../../img/linkedin.png";
import Instagram from "../../img/instagram.png";
import Vector1 from "../../img/Vector1.png";
import Vector2 from "../../img/Vector2.png";
import Photo from "../../img/Photo.png";
import { themeContext } from "../../Context";
import { useContext } from "react";
// import { motion } from "framer-motion";

const Intro = () => {
  // const transition = { duration: 2, type: "spring" };
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="intro" id="Intro">
      <div className="i-left">
        <div className="i-name">
          <span style={{ color: darkMode ? "white" : "" }}>Hi! I am</span>
          <span>Sammy Robbins</span>
          <span>
            Frontend Designer and Develper with high level of experience in web
            designing and development, prdoucing the quality works.
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

      <div className="i-right">
        <img src={Vector1} alt="" />
        <img src={Vector2} alt="" />
        <img src={Photo} alt="" />
        <div
          className="blur i-blur1"
          style={{
            background: "var(--purple)",
            top: "-10.3rem",
            right: "7rem",
          }}
        ></div>
        <div
          className="blur i-blur2"
          style={{
            background: "var(--skyblue)",
            top: "12rem",
            right: "20rem",
          }}
        ></div>
      </div>
    </div>
  );
};

export default Intro;
