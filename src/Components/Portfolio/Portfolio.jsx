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
        spaceBetween={10}
        slidesPerView={5}
        breakpoints={{
          320: {
            slidesPerView: 2,
            spaceBetween: 300,
          },
          680: {
            slidesPerView: 2,
            spaceBetween: 200,
          },
          780: {
            slidesPerView: 2,
            spaceBetween: 100,
          },
          900: {
            slidesPerView: 3,
            spaceBetween: 400,
          },
          1080: {
            spaceBetween: 300,
            slidesPerView: 3,
          },
          1300: {
            spaceBetween: 400,
            slidesPerView: 4,
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
