
import React from 'react';
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

function ImageSwiper() {
  return (
    <div className="swiper-container">
      {/* <div className='container'> */}
      <Swiper
        slidesPerView={5} // Number of slides visible at once
        spaceBetween={20} // Space between slides
        loop={true} // Enable infinite looping
        autoplay={{
          delay: 1, // Needed for continuous effect
          disableOnInteraction: false,
          pauseOnMouseEnter: false,
        }}
        speed={2000} // Smooth sliding speed (in ms)
        modules={[Autoplay]}
        className="container"
      >
        <SwiperSlide>
          <img src="swiper1.png" alt="Image 1" className="swiper-image swiper1" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="swiper2.png" alt="Image 2" className="swiper-image swiper2" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="swiper3.png" alt="Image 3" className="swiper-image swiper3" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="swiper4.png" alt="Image 4" className="swiper-image swiper4" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="swiper5.png" alt="Image 5" className="swiper-image swiper5" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="swiper1.png" alt="Image 1" className="swiper-image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="swiper2.png" alt="Image 2" className="swiper-image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="swiper3.png" alt="Image 3" className="swiper-image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="swiper4.png" alt="Image 4" className="swiper-image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="swiper5.png" alt="Image 5" className="swiper-image" />
        </SwiperSlide>
      </Swiper>
      {/* </div> */}
    </div>
  );
}

export default ImageSwiper;
