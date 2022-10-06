import React from "react";
import "./Services.css";
import Card from "../Card/Card";
import HeartEmoji from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png";
import Resume from "./Resume.pdf";
import { themeContext } from "../../Context";
import { useContext } from "react";
import { motion } from "framer-motion";

const Services = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  const transition = { duration: 1.5, type: "spring" };
  return (
    <div className="services" id="Services">
      <div className="s-left">
        <span style={{ color: darkMode ? "white" : "" }}>My</span>
        <span>Services</span>
        <span>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          Sapiente quas repudiandae ut dolorem atque, ea impedit animi nihil
          eius
        </span>
        <a href={Resume} download>
          <button className="button s-button">Download CV</button>
        </a>
        <div className="blur s-blur1"></div>
      </div>

      <div className="s-right cards">
        <motion.div
          initial={{ top: "-4rem", left: "28rem" }}
          whileInView={{ top: "-4rem", left: "22rem" }}
          transition={transition}
        >
          <Card
            emoji={HeartEmoji}
            title={"Design"}
            body={"Figma, Photoshop, Adobe Xd, Illustrator"}
          />
        </motion.div>

        <motion.div
          initial={{ top: "16rem", left: "26rem" }}
          whileInView={{ top: "16rem", left: "20rem" }}
          transition={transition}
        >
          <Card
            emoji={Humble}
            title={"UI/UX"}
            body={"Lorem ipsum dolor sit amet, consectetur adipisicing elit."}
          />
        </motion.div>
        <motion.div
          initial={{ top: "3rem", left: "-8rem" }}
          whileInView={{ top: "3rem", left: "5rem" }}
          transition={transition}
        >
          <Card
            emoji={Glasses}
            title={"Developer"}
            body={"HTML, CSS, Tailwind, javaScript, React"}
          />
        </motion.div>
        <div className="blur s-blur2"></div>
      </div>
    </div>
  );
};

export default Services;
