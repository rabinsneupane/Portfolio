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
  const transition = { duration: 1, type: "spring" };
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="services" id="Services">
      <div className="s-left">
        <span style={{ color: darkMode ? "white" : "" }}>My</span>
        <span>Services</span>
        <span>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. <br />
          Sapiente quas repudiandae ut dolorem atque, ea impedit animi nihil
          eius
        </span>
        <a href={Resume} download>
          <button className="button s-button">Download CV</button>
        </a>
      </div>

      <div className="s-right cards">
        <motion.div
          initial={{ left: "25rem" }}
          whileInView={{ left: "14rem" }}
          transition={transition}
          // style={{ left: "14rem" }}
        >
          <Card
            emoji={HeartEmoji}
            title={"Design"}
            body={"Figma, Photoshop, Adobe Xd, Illustrator"}
          />
        </motion.div>

        <motion.div
          initial={{ left: "-11rem", top: "12rem" }}
          whileInView={{ left: "-4rem" }}
          transition={transition}
          style={{ top: "12rem", left: "-4rem" }}
        >
          <Card
            emoji={Glasses}
            title={"Developer"}
            body={"HTML, CSS, Tailwind, javaScript, React"}
          />
        </motion.div>

        <motion.div
          initial={{ top: "19rem", left: "25rem" }}
          whileInView={{ left: "12rem" }}
          transition={transition}
          style={{ top: "19rem", left: "12rem" }}
        >
          <Card
            emoji={Humble}
            title={"UI/UX"}
            body={"Lorem ipsum dolor sit amet, consectetur adipisicing elit."}
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Services;
