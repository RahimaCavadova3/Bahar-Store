import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Pagination, Autoplay } from "swiper/modules";

function Slider4() {
   const slider4Data = [
    {id:1, img: 'https://admin475.baharstore.az/storage//uploads/images/blog/deri-tipine-uygun-ideal-qulluq-nece-secilmelidir-687630661439d.png', text: 'Dəri tipinə uyğun ideal qulluq necə seçilməlidir?' },
    {id:2, img: 'https://admin475.baharstore.az/storage//uploads/images/blog/gunesden-deriye-effektiv-qoruma-ucun-top-5-vasite-gunesden-qoruyucu-kremler-687629d95420d.png', text: 'Günəşdən dəriyə effektiv qoruma üçün TOP-5 vasitə — günəşdən qoruyucu kremlər' },
    {id:3, img: 'https://admin475.baharstore.az/storage//uploads/images/blog/koreya-deriye-qulluq-nedir-ve-niye-bu-qeder-populyardir-687644e5cbe23.png', text: 'Koreya dəriyə qulluq nədir və niyə bu qədər populyardır?' },
    {id:4, img: 'https://admin475.baharstore.az/storage//uploads/images/blog/niye-tebii-dezodorant-secmeye-deyer-ve-niye-mehz-salt-of-the-earth-tovsiye-edirik-688b6ae88f7fa.png', text: 'Niyə təbii dezodorant seçməyə dəyər və niyə məhz Salt of the Earth tövsiyə edirik?' },
    {id:5, img: 'https://admin475.baharstore.az/storage//uploads/images/blog/makiyajin-butun-gun-davam-etmesi-ucun-5-meslehet-68b9845c295fa.png', text: 'Makiyajın bütün gün davam etməsi üçün 5 məsləhət' },
    {id:6, img: 'https://admin475.baharstore.az/storage//uploads/images/blog/qis-movsumunde-deriye-qulluq-soyuq-havada-deriye-ne-lazimdir-6942a78c166c9.png', text: 'Qış mövsümündə dəriyə qulluq: soyuq havada dəriyə nə lazımdır' },
    {id:7, img: 'https://admin475.baharstore.az/storage//uploads/images/blog/qadinlar-ucun-parfum-secimi-sexsi-uslubunuza-uygun-etir-6731edd34f851.jpg', text: 'Qadınlar üçün Parfüm Seçimi: Şəxsi Üslubunuza Uyğun Ətir' },
  ]
  return (
    <>
      <div className="w-full lg:w-[80%]">
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }}
          modules={[Pagination, Autoplay]}
          autoplay={{ delay: 3500, disableOnInteraction: false }}
          className="mySwiper"
        >
          {
            slider4Data.map(item=> (
              <SwiperSlide key={item.id} className="rounded-2xl bg-white text-black font-semibold overflow-hidden"><img className="h-52 w-full" src={item.img} alt="qulluq" /><p className="py-8 px-5 min-h-[100px]">{item.text.length > 50 ? item.text.slice(0, 50) + "..." : item.text}</p></SwiperSlide>
            ))
          }
        </Swiper>
      </div>
    </>
  );
}

export default Slider4;
