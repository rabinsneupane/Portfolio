import { motion } from "framer-motion";
import React, { useContext } from "react";
import { BiCodeAlt } from "react-icons/bi";
import { CgUserlane } from "react-icons/cg";
import { MdDesignServices } from "react-icons/md";
import { themeContext } from "../../Context";
import Card from "../Card/Card";
import "./Services.css";

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
          Unlocking Your Business Potential with Premium Frontend Design and
          Development Services: Driving Your Online Presence Forward with
          Customized, High-Performance Solutions and Unmatched User Experience
        </span>
        <button className="button s-button">Hire Me</button>

        <div className="blur s-blur1"></div>
      </div>

      <div className="s-right cards">
        <motion.div
          initial={{ top: "-4rem", left: "28rem" }}
          whileInView={{ top: "-4rem", left: "22rem" }}
          transition={transition}
        >
          <Card
            icon={<MdDesignServices />}
            title={"Design"}
            body={"Photoshop, Indesign, Illustrator, Canva"}
          />
        </motion.div>

        <motion.div
          initial={{ top: "16rem", left: "26rem" }}
          whileInView={{ top: "16rem", left: "20rem" }}
          transition={transition}
        >
          <Card
            icon={<CgUserlane />}
            title={"UI/UX"}
            body={"Figma, Adobe XD, Sketch"}
          />
        </motion.div>
        <motion.div
          initial={{ top: "3rem", left: "-8rem" }}
          whileInView={{ top: "3rem", left: "5rem" }}
          transition={transition}
        >
          <Card
            icon={<BiCodeAlt />}
            title={"Develop"}
            body={"HTML, CSS, Tailwind CSS, JavaScript, React"}
          />
        </motion.div>
        <div className="blur s-blur2"></div>
      </div>
    </div>
  );
};

export default Services;
