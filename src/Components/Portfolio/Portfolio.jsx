import React from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Pagination } from "swiper";
import "swiper/css/pagination";
import Sidebar from "../../img/sidebar.png";
import Ecommerce from "../../img/ecommerce.png";
import HOC from "../../img/hoc.png";
import MusicApp from "../../img/musicapp.png";
import { themeContext } from "../../Context";
import { useContext } from "react";

const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="portfolio" id="Projects">
      <span style={{ color: darkMode ? "white" : "" }}>Recent Projects</span>
      <span>Portfolio</span>

      <Swiper
        className="p-slider"
        grabCursor={true}
        modules={[Pagination]}
        pagination={{ clickable: true }}
        loop={true}
        breakpoints={{
          320: {
            spaceBetween: 40,
            slidesPerView: 1,
          },
          375: {
            spaceBetween: 0,
          },
          425: {
            spaceBetween: -10,
          },
          470: {
            spaceBetween: 80,
          },
          560: {
            spaceBetween: 0,
          },
          620: {
            spaceBetween: 380,
            slidesPerView: 2,
          },
          800: {
            spaceBetween: 180,
          },
          1024: {
            spaceBetween: 380,
            slidesPerView: 3,
          },
          1400: {
            slidesPerView: 4,
            spaceBetween: 400,
          },
        }}
      >
        <SwiperSlide>
          <img src={Sidebar} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Ecommerce} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={HOC} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={MusicApp} alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Portfolio;
