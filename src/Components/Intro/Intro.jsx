import React, { useContext } from "react";
import { AiFillGithub, AiFillInstagram } from "react-icons/ai";
import { RiLinkedinBoxFill } from "react-icons/ri";
import { themeContext } from "../../Context";
import HeadPhoto from "../../img/HeadPhoto.webp";
import "./Intro.css";
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
          <span>Robbins Neupane</span>
          <span>
            Skilled Frontend Designer and Developer with extensive experience in
            creating beautiful and functional websites. Adept at combining
            creativity and technical expertise to produce exceptional results.
            Committed to staying up-to-date with the latest web design trends
            and technologies to deliver projects that meet or exceed your
            expectations.
          </span>
        </div>

        <button className="button i-button">Get in Touch</button>

        <div className="i-icons">
          <a
            href="https://www.instagram.com/robbinsneupane"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiFillInstagram className="img" />
          </a>
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
        </div>
      </div>

      <div className="i-right">
        <img src={HeadPhoto} alt="" />
        <div
          className="blur i-blur1"
          style={{
            background: "var(--purple)",
            top: "7rem",
            right: "10rem",
          }}
        ></div>
        <div
          className="blur i-blur2"
          style={{
            background: "var(--skyblue)",
            top: "45rem",
            right: "20rem",
          }}
        ></div>
      </div>
    </div>
  );
};

export default Intro;
