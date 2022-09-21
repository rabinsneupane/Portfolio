import React from "react";
import "./Testimonials.css";
import { Swiper, SwiperSlide } from "swiper/react";
import profilePic1 from "../../img/profile1.jpg";
import profilePic2 from "../../img/profile2.jpg";
import profilePic3 from "../../img/profile3.jpg";
import profilePic4 from "../../img/profile4.jpg";
import { Pagination } from "swiper";
import "swiper/css/pagination";

const Testimonials = () => {
  const clients = [
    {
      img: profilePic1,
      review:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet incidunt doloribus consectetur quia, illum explicabo libero laborum, maxime debitis hic possimus",
    },
    {
      img: profilePic2,
      review:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet incidunt doloribus consectetur quia, illum explicabo libero laborum, maxime debitis hic possimus",
    },
    {
      img: profilePic3,
      review:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet incidunt doloribus consectetur quia, illum explicabo libero laborum, maxime debitis hic possimus",
    },
    {
      img: profilePic4,
      review:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet incidunt doloribus consectetur quia, illum explicabo libero laborum, maxime debitis hic possimus",
    },
  ];
  return (
    <div className="t-wrapper" id="Testimonials">
      <div className="t-heading">
        <span>What </span>
        <span>My Clients </span>
        <span>Says</span>

        <div className="blur t-blur1"></div>
        <div className="blur t-blur2"></div>
      </div>

      <Swiper
        className="t-slider"
        modules={[Pagination]}
        loop={true}
        pagination={{ clickable: true }}
        breakpoints={{
          320: {
            slidesPerView: 1,
          },
          460: {
            spaceBetween: 180,
            // slidesPerView: 2,
          },
          630: {
            spaceBetween: 0,
          },
          700: {
            spaceBetween: -20,
          },
          770: {
            slidesPerView: 2,
            spaceBetween: 380,
          },
          900: {
            spaceBetween: 280,
          },
          1080: {
            slidesPerView: 3,
          },
        }}
      >
        {clients.map((clients, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="testimonials">
                <img src={clients.img} alt="" />
                <span>{clients.review}</span>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Testimonials;
