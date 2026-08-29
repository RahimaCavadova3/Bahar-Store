import React, { useContext } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { useNavigate } from "react-router";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { DATA } from "./context/DataContext";

function Slider2() {
  const { category } = useContext(DATA);
  const navigate = useNavigate();

  const categoryArray = Array.isArray(category) 
    ? category 
    : (category?.categories || Object.values(category || {}));

  return (
    <>
      <div className="max-w-6xl mx-auto pt-5 px-3">
        <Swiper
          slidesPerView={3}
          spaceBetween={5}
          breakpoints={{
            640: { slidesPerView: 4, spaceBetween: 10 },
            768: { slidesPerView: 5, spaceBetween: 20 },
            1024: { slidesPerView: 6, spaceBetween: 30 },
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          {
            categoryArray.map((item, index) => (
              <SwiperSlide 
                onClick={() => {
                  localStorage.setItem("selectedCategory", item.name);
                  localStorage.removeItem("selectedSubCategory");
                  localStorage.removeItem("subProductIds");
                  navigate('/mehsullar'); 
                }} 
                key={item.id || index} 
                className="group shrink-0 text-center text-[14px] md:text-[15px] lg:text-[16px] xl:text-[17px] hover:text-[#ea0b17] font-semibold cursor-pointer py-3"
              >
                <div className="border border-[#ffdfe2] group-hover:border-[#a9a9a9] p-3 shadow mx-auto w-24 h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 xl:w-36 xl:h-36 rounded-[50%] mb-2 overflow-hidden flex items-center justify-center bg-white">
                  <img className='w-full h-full object-cover rounded-[50%] group-hover:scale-105 duration-300' src={item.img} alt={item.name} />
                </div>
                {item.name}
              </SwiperSlide>
            ))
          }
        </Swiper>
      </div>
    </>
  );
}

export default Slider2;