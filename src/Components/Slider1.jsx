import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import { Navigation, Autoplay } from "swiper/modules";

function Slider1() {
  const slider1Data = [
    {id: 1, img: 'https://admin475.baharstore.az/storage//uploads/images/gallery/img-69fc28e7bcd1c.png'},
    {id: 2, img: 'https://admin475.baharstore.az/storage//uploads/images/gallery/img-69fc2878f08ed.png'},
    {id: 3, img: 'https://admin475.baharstore.az/storage//uploads/images/gallery/img-69fb22be8dc98.png'},
    {id: 4, img: 'https://admin475.baharstore.az/storage//uploads/images/gallery/img-69de17cc563de.png'},
    {id: 5, img: 'https://admin475.baharstore.az/storage//uploads/images/gallery/img-69412f0001ee5.webp'},
  ]
  return (
    <>
      <div className="max-w-6xl mx-auto my-5 px-3 relative">
        <Swiper
          modules={[Navigation, Autoplay]}
          navigation={{
            nextEl: ".sağ-ox",
            prevEl: ".sol-ox",
          }}
          autoplay={{ delay: 3500, disableOnInteraction: false }}
          className="mySwiper relative"
        >
          {
            slider1Data.map(item=>(
              <SwiperSlide key={item.id}>
                <img className="w-full" src={item.img} alt="sliderfoto1" />
              </SwiperSlide>
            ))
          } 
        </Swiper>
        <button className="sol-ox absolute z-10 right-15 sm:left-10 bottom-3 sm:top-32 md:top-40 lg:top-50 xl:top-52 border-0 bg-[#ffffff7e] w-8 h-8 sm:w-12 sm:h-12 flex items-center justify-center rounded-[50%] text-[#292d32] text-[14px] sm:text-2xl cursor-pointer">{"←"}</button>
        <button className="sağ-ox absolute z-10 right-5 sm:right-10 bottom-3 sm:top-32 md:top-40 lg:top-50 xl:top-52 border-0 bg-[#ffffff7e] w-8 h-8 sm:w-12 sm:h-12 flex items-center justify-center rounded-[50%] text-[#292d32] text-[14px] sm:text-2xl cursor-pointer">{"→"}</button>
      </div>
    </>
  );
}

export default Slider1;
