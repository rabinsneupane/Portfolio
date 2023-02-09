import React from "react";
import { Pagination } from "swiper";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import profilePic1 from "../../img/profile1.webp";
import profilePic2 from "../../img/profile2.webp";
import profilePic3 from "../../img/profile3.webp";
import profilePic4 from "../../img/profile4.webp";
import "./Testimonials.css";

const Testimonials = () => {
  const clients = [
    {
      img: profilePic1,
      review:
        "He has solid skills and creates visually appealing, user-friendly web pages with responsive design. He have a keen eye for detail and can troubleshoot and fix bugs efficiently. He is so talented who consistently delivers high-quality work.",
    },
    {
      img: profilePic2,
      review:
        "He is a master developer, producing elegant and effective web pages every time. He is also a great communicator and problem-solver, making a valuable addition to the team.",
    },
    {
      img: profilePic3,
      review:
        "I can't express enough how grateful I am for his hard work and dedication to this project. The end result was a website that truly reflects my brand and delivers an outstanding user experience. I highly recommend this developer to anyone looking to improve their website's visual and user experience. Thank you!",
    },
    {
      img: profilePic4,
      review:
        "The developer was also instrumental in improving the user experience, making the site easy to navigate and interact with. He made sure that every element was optimized for maximum impact and that the site was responsive and accessible to users on all devices.",
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
        grabCursor={true}
        modules={[Pagination]}
        loop={true}
        pagination={{ clickable: true }}
        breakpoints={{
          460: {
            slidesPerView: 2,
            spaceBetween: 40,
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
            spaceBetween: 220,
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
