import React, { useContext } from "react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { themeContext } from "../../Context";
import Ecommerce from "../../img/ecommerce.webp";
import HOC from "../../img/hoc.webp";
import MusicApp from "../../img/musicapp.webp";
import Sidebar from "../../img/sidebar.webp";
import "./Portfolio.css";

const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="pf-wrapper" id="Projects">
      <span style={{ color: darkMode ? "white" : "" }}>Recent Projects</span>
      <span>Portfolio</span>

      <Swiper
        className="p-slider"
        grabCursor={true}
        modules={[Pagination]}
        pagination={{ clickable: true }}
        loop={true}
        // spaceBetween={10}
        // slidesPerView={5}
        breakpoints={{
          460: {
            slidesPerView: 1.1,
            // spaceBetween: 40,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 280,
          },
          850: {
            slidesPerView: 2,
            spaceBetween: 140,
          },
          1000: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1150: {
            slidesPerView: 3,
            spaceBetween: 380,
          },
          1600: {
            slidesPerView: 4,
            spaceBetween: 300,
          },
        }}
      >
        <SwiperSlide>
          <div className="portfolio">
            <img src={Sidebar} alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="portfolio">
            <img src={Ecommerce} alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="portfolio">
            <img src={HOC} alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="portfolio">
            <img src={MusicApp} alt="" />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Portfolio;
