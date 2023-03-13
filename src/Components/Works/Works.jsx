import { motion } from "framer-motion";
import React, { useContext } from "react";
import { themeContext } from "../../Context";
// import Amazon from "../../img/amazon.webp";
import Facebook from "../../img/Facebook.webp";
import Fiverr from "../../img/fiverr.webp";
import Shopify from "../../img/Shopify.webp";
import Upwork from "../../img/Upwork.webp";
import Wordpress from "../../img/Wordpress.png";
import Resume from "../../Resume.pdf";
import "./Works.css";

const Works = () => {
  const transition = { duration: 3.5, type: "spring" };
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="works">
      <div className="w-left">
        <span style={{ color: darkMode ? "white" : "" }}>My Works with</span>
        <span>Brands & Clients</span>
        <span>
          Leveraging cutting-edge technologies and creative problem-solving to
          turn brands and clients' vision into reality. Consistently delivering
          high-quality and innovative frontend development solutions with
          precision, excellence, and timeliness
        </span>
        <a href={Resume} download>
          <button className="button w-button">Download CV</button>
        </a>
        <div className="blur s-blur1"></div>
      </div>

      <div className="w-right">
        <motion.div
          initial={{ rotate: 45 }}
          whileInView={{ rotate: 0 }}
          viewport={{ margin: "-40px" }}
          transition={transition}
          className="w-main-circle"
        >
          <div className="w-sec-circle">
            <img src={Upwork} alt="" />
          </div>

          <div className="w-sec-circle">
            <img src={Fiverr} alt="" />
          </div>
          <div className="w-sec-circle">
            <img src={Wordpress} alt="" />
          </div>
          <div className="w-sec-circle">
            <img src={Shopify} alt="" />
          </div>
          <div className="w-sec-circle">
            <img src={Facebook} alt="" />
          </div>
        </motion.div>

        <div className="w-back-circle blue-circle"></div>
        <div className="w-back-circle yellow-circle"></div>
        <div className="blur w-blur2"></div>
      </div>
    </div>
  );
};

export default Works;
