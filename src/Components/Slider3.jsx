import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Pagination, Autoplay } from "swiper/modules";

function Slider3() {
  return (
    <>
      <div className="max-w-6xl mx-auto">
        <>
          <Swiper
            slidesPerView={3}
            spaceBetween={10}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              640: {
                slidesPerView: 3,
                spaceBetween: 10,
              },
              768: {
                slidesPerView: 5,
                spaceBetween: 10,
              },
              1024: {
                slidesPerView: 7,
                spaceBetween: 10,
              },
            }}
            modules={[Autoplay]}
            autoplay={{ delay: 3500, disableOnInteraction: false }}
            className="mySwiper"
          >
            <SwiperSlide className="object-contain"><img className="w-60 h-20" src="https://admin475.baharstore.az/storage/uploads/images/brands/img_1774959735.png" alt="brend" /></SwiperSlide>
            <SwiperSlide className="object-contain"><img className="w-60 h-20" src="https://admin475.baharstore.az/storage/uploads/images/brands/img_1776321046.png" alt="brend" /></SwiperSlide>
            <SwiperSlide className="object-contain"><img className="w-60 h-20" src="https://admin475.baharstore.az/storage//uploads/images/brands/nuvaria-68999aaf7a093.png" alt="brend" /></SwiperSlide>
            <SwiperSlide className="object-contain"><img className="w-60 h-20" src="https://admin475.baharstore.az/storage/uploads/images/brands/img_1776347208.jpg" alt="brend" /></SwiperSlide>
            <SwiperSlide className="object-contain"><img className="w-60 h-20" src="https://admin475.baharstore.az/storage/uploads/images/brands/img_1776322207.png" alt="brend" /></SwiperSlide>
            <SwiperSlide className="object-contain"><img className="w-60 h-20" src="https://admin475.baharstore.az/storage/uploads/images/brands/img_1776321023.jpg" alt="brend" /></SwiperSlide>
            <SwiperSlide className="object-contain"><img className="w-60 h-20" src="https://admin475.baharstore.az/storage/uploads/images/brands/img_1776321014.jpg" alt="brend" /></SwiperSlide>
            <SwiperSlide className="object-contain"><img className="w-60 h-20" src="https://admin475.baharstore.az/storage/uploads/images/brands/img_1776347216.png" alt="brend" /></SwiperSlide>
            <SwiperSlide className="object-contain"><img className="w-60 h-20" src="https://admin475.baharstore.az/storage/uploads/images/brands/img_1776321025.jpg" alt="brend" /></SwiperSlide>
            <SwiperSlide className="object-contain"><img className="w-60 h-20" src="https://admin475.baharstore.az/storage/uploads/images/brands/img_1774959736.jpg" alt="brend" /></SwiperSlide>
            <SwiperSlide className="object-contain"><img className="w-60 h-20" src="https://admin475.baharstore.az/storage/uploads/images/brands/img_1776321044.png" alt="brend" /></SwiperSlide>
            <SwiperSlide className="object-contain"><img className="w-60 h-20" src="https://admin475.baharstore.az/storage/uploads/images/brands/img_1776347205.jpg" alt="brend" /></SwiperSlide>
            <SwiperSlide className="object-contain"><img className="w-60 h-20" src="https://admin475.baharstore.az/storage/uploads/images/brands/img_1733823278.jpg" alt="brend" /></SwiperSlide>
            <SwiperSlide className="object-contain"><img className="w-60 h-20" src="https://admin475.baharstore.az/storage/uploads/images/brands/img_1733824738.jpg" alt="brend" /></SwiperSlide>
            <SwiperSlide className="object-contain"><img className="w-60 h-20" src="https://admin475.baharstore.az/storage/uploads/images/brands/img_1776347184.jpg" alt="brend" /></SwiperSlide>
            <SwiperSlide className="object-contain"><img className="w-60 h-20" src="https://admin475.baharstore.az/storage/uploads/images/brands/img_1776347192.jpg" alt="brend" /></SwiperSlide>
            <SwiperSlide className="object-contain"><img className="w-60 h-20" src="https://admin475.baharstore.az/storage/uploads/images/brands/img_1776321041.jpg" alt="brend" /></SwiperSlide>
            <SwiperSlide className="object-contain"><img className="w-60 h-20" src="https://admin475.baharstore.az/storage/uploads/images/brands/img_1733823275.jpg" alt="brend" /></SwiperSlide>
            <SwiperSlide className="object-contain"><img className="w-60 h-20" src="https://admin475.baharstore.az/storage/uploads/images/brands/img_1767970183.jpg" alt="brend" /></SwiperSlide>
            <SwiperSlide className="object-contain"><img className="w-60 h-20" src="https://admin475.baharstore.az/storage/uploads/images/brands/img_1776347180.jpg" alt="brend" /></SwiperSlide>
          </Swiper>
        </>
      </div>
    </>
  );
}

export default Slider3;
