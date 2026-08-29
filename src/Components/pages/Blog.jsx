import React, { useState } from "react";
import BlogCard from "../BlogCard";

function Blog() {
  const blogData = [
    {id: 1, img: 'https://admin475.baharstore.az/storage//uploads/images/blog/clean-girl-makeup-tebii-gozellik-ucun-minimal-makiyaj-697a0b3d8e84d.png', text: '✨ Clean Girl Makeup: Təbii gözəllik üçün minimal makiyaj', date: '28/01/2026'},
    {id: 2, img: 'https://admin475.baharstore.az/storage//uploads/images/blog/qis-movsumunde-deriye-qulluq-soyuq-havada-deriye-ne-lazimdir-6942a78c166c9.png', text: 'Qış mövsümündə dəriyə qulluq: soyuq havada dəriyə nə lazımdır', date: '17/12/2025'},
    {id: 3, img: 'https://admin475.baharstore.az/storage//uploads/images/blog/makiyajin-butun-gun-davam-etmesi-ucun-5-meslehet-68b9845c295fa.png', text: 'Makiyajın bütün gün davam etməsi üçün 5 məsləhət', date: '04/09/2025'},
    {id: 4, img: 'https://admin475.baharstore.az/storage//uploads/images/blog/niye-tebii-dezodorant-secmeye-deyer-ve-niye-mehz-salt-of-the-earth-tovsiye-edirik-688b6ae88f7fa.png', text: 'Niyə təbii dezodorant seçməyə dəyər və niyə məhz Salt of the Earth tövsiyə edirik?', date: '31/07/2025'},
    {id: 5, img: 'https://admin475.baharstore.az/storage//uploads/images/blog/deri-tipine-uygun-ideal-qulluq-nece-secilmelidir-687630661439d.png', text: 'Dəri tipinə uyğun ideal qulluq necə seçilməlidir?', date: '15/07/2025'},
    {id: 6, img: 'https://admin475.baharstore.az/storage//uploads/images/blog/gunesden-deriye-effektiv-qoruma-ucun-top-5-vasite-gunesden-qoruyucu-kremler-687629d95420d.png', text: 'Günəşdən dəriyə effektiv qoruma üçün TOP-5 vasitə — günəşdən qoruyucu kremlər', date: '15/07/2025'},
    {id: 7, img: 'https://admin475.baharstore.az/storage//uploads/images/blog/koreya-deriye-qulluq-nedir-ve-niye-bu-qeder-populyardir-687644e5cbe23.png', text: 'Koreya dəriyə qulluq nədir və niyə bu qədər populyardır?', date: '15/07/2025'},
    {id: 8, img: 'https://admin475.baharstore.az/storage//uploads/images/blog/qadinlar-ucun-parfum-secimi-sexsi-uslubunuza-uygun-etir-6731edd34f851.jpg', text: 'Qadınlar üçün Parfüm Seçimi: Şəxsi Üslubunuza Uyğun Ətir', date: '13/05/2024'},
    {id: 9, img: 'https://admin475.baharstore.az/storage//uploads/images/blog/uze-qulluq-her-movsume-uygun-meslehetler-1718662843.jpg', text: 'Üzə Qulluq: Hər Mövsümə Uyğun Məsləhətlər', date: '21/04/2024'},
    {id: 10, img: 'https://admin475.baharstore.az/storage//uploads/images/blog/sac-baximi-saglam-ve-parlaq-saclarin-sirri-1718661438.jpg', text: 'Saç Baxımı: Sağlam və Parlaq Saçların Sirri', date: '14/04/2024'},
    {id: 11, img: 'https://admin475.baharstore.az/storage//uploads/images/blog/gozellik-sirlerine-toxunun-gundelik-baxim-rutinleri-6731ee00e1824.jpg', text: 'Gözəllik Sirlərinə Toxunun: Gündəlik Baxım Rutinləri', date: '19/03/2024'},
    {id: 12, img: 'https://admin475.baharstore.az/storage//uploads/images/blog/saglam-heyat-terzi-gozellik-icden-gelir-6732132787427.jpg', text: 'Sağlam Həyat Tərzi: Gözəllik İçdən Gəlir', date: '15/01/2024'},
  ];

  const [selectedTab, setSelectedTab] = useState("Hamısı");

  const filteredBlogs = blogData.filter(item => {
    if (selectedTab === "Bloq") {
      return item.id !== 12; 
    } else if (selectedTab === "Yeniliklər") {
      return item.id === 12; 
    }
    return true;
  });

  return (
    <>
      <h4 className="text-2xl lg:text-3xl font-semibold text-center mt-5">
        Bloq
      </h4>
      <div className="max-w-6xl mx-auto flex gap-3 justify-between items-center mt-10 px-3">
        <ul className="flex gap-3 items-center">
          <li 
            onClick={() => setSelectedTab("Hamısı")}
            className={`border py-1 px-5 rounded-3xl text-[15px] cursor-pointer duration-300 ${
              selectedTab === "Hamısı" 
                ? "border-[#ea0b17] text-white bg-[#ea0b17]" 
                : "border-[#b3b3b4] hover:bg-[#ea0b17] hover:text-white hover:border-[#ea0b17]"
            }`}
          >
            Hamısı
          </li>
          <li 
            onClick={() => setSelectedTab("Bloq")}
            className={`border py-1 px-5 rounded-3xl text-[15px] cursor-pointer duration-300 ${
              selectedTab === "Bloq" 
                ? "border-[#ea0b17] text-white bg-[#ea0b17]" 
                : "border-[#b3b3b4] hover:bg-[#ea0b17] hover:text-white hover:border-[#ea0b17]"
            }`}
          >
            Bloq
          </li>
          <li 
            onClick={() => setSelectedTab("Yeniliklər")}
            className={`border py-1 px-5 rounded-3xl text-[15px] cursor-pointer duration-300 ${
              selectedTab === "Yeniliklər" 
                ? "border-[#ea0b17] text-white bg-[#ea0b17]" 
                : "border-[#b3b3b4] hover:bg-[#ea0b17] hover:text-white hover:border-[#ea0b17]"
            }`}
          >
            Yeniliklər
          </li>
        </ul>
        <p className="hidden md:flex text-[#8c8c8c] text-[15px]">
          {filteredBlogs.length} Bloq
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 mt-10 px-3">
        {
          filteredBlogs.map(item => (
            <BlogCard key={item.id} blog={item} />
          ))
        }
      </div>
    </>
  );
}

export default Blog;