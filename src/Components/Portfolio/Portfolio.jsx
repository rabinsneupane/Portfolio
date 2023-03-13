import React, { useContext } from "react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { themeContext } from "../../Context";
import fnThumbnail from "../../img/fashionninza.png";
import findMoviezThumbnail from "../../img/findMoviez.png";
import FriendzyThumbnail from "../../img/friendzy.png";
import furnitureThumbnail from "../../img/furniture.png";
import gpt3Thumbnail from "../../img/gpt3.png";
import IMDbThumbnail from "../../img/imdbClone.png";
import LorukiThumbnail from "../../img/loruki.png";
import ManageThumbnail from "../../img/manage.png";

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
            <a
              href="https://friendzy.netlify.app/"
              target={"_blank"}
              rel={"noreferrer"}
            >
              <img src={FriendzyThumbnail} alt="" />
            </a>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="portfolio">
            <a
              href="https://managesaasplatrorm.netlify.app"
              target={"_blank"}
              rel={"noreferrer"}
            >
              <img src={ManageThumbnail} alt="" />
            </a>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="portfolio">
            <a
              href="https://chatgpt3openai.netlify.app"
              target={"_blank"}
              rel={"noreferrer"}
            >
              <img src={gpt3Thumbnail} alt="" />
            </a>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="portfolio">
            <a
              href="https://fashionninja.netlify.app"
              target={"_blank"}
              rel={"noreferrer"}
            >
              <img src={fnThumbnail} alt="" />
            </a>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="portfolio">
            <a
              href="https://imdbwebsiteclone.netlify.app"
              target={"_blank"}
              rel={"noreferrer"}
            >
              <img src={IMDbThumbnail} alt="" />
            </a>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="portfolio">
            <a
              href="https://lorukiwebcloud.netlify.app"
              target={"_blank"}
              rel={"noreferrer"}
            >
              <img src={LorukiThumbnail} alt="" />
            </a>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="portfolio">
            <a
              href="https://findmoviez.netlify.app"
              target={"_blank"}
              rel={"noreferrer"}
            >
              <img src={findMoviezThumbnail} alt="" />
            </a>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="portfolio">
            <a
              href="https://homeyfurniture.netlify.app/"
              target={"_blank"}
              rel={"noreferrer"}
            >
              <img src={furnitureThumbnail} alt="" />
            </a>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Portfolio;
