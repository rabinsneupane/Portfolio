import React from "react";
import "./Works.css";
import Amazon from "../../img/amazon.png";
import Facebook from "../../img/Facebook.png";
import Fiverr from "../../img/fiverr.png";
import Shopify from "../../img/Shopify.png";
import Upwork from "../../img/Upwork.png";
import { themeContext } from "../../Context";
import { useContext } from "react";
import { motion } from "framer-motion";

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
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente
          quas repudiandae ut <br />
          dolorem atque, ea impedit animi nihil eius
        </span>
        <button className="button w-button">Hire me</button>
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
            <img src={Amazon} alt="" />
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
