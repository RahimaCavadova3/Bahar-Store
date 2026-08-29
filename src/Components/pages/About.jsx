import React from "react";
import Slider3 from "../Slider3";
import { Link } from "react-router";
import Gallery1 from "../Gallery1";
import Gallery2 from "../Gallery2";

function About() {
  return (
    <>
      <h4 className="text-2xl lg:text-3xl font-semibold text-center mt-5">
        Haqqımızda
      </h4>
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-5 mt-10 px-3">
        <Gallery1 />
      </div>
      <h4 className="text-2xl lg:text-3xl font-semibold text-center mt-20">
        Bahar Store
      </h4>
      <p className="max-w-4xl mx-auto text-center text-[16px] text-[#3b3b3c] mt-5 px-3">
        <span className="font-bold"> Bahar Store</span> müştərilərinə sərfəli
        qiymətlərlə geniş məhsul çeşidi təqdim edərək gözəllik və sağlamlıq üçün
        lazım olan hər şeyi bir arada təklif edir. Hər zövqə uyğun keyfiyyətli
        məhsulları ilə Bahar Store hər zaman müştərilərinin yanında olmağa
        çalışır. “Bahar Store LLC” MMC Benefisiarın VÖEN-i: 2005939831
      </p>
      <h4 className="text-2xl lg:text-3xl font-semibold text-center mt-20">
        Tariximiz
      </h4>
      <p className="max-w-4xl mx-auto text-center text-[16px] text-[#3b3b3c] mt-5 px-3">
        <span className="font-bold">Bahar Store şirkəti</span> 2017-ci ildə
        Azərbaycanda yaradılmış və qısa zamanda innovativ "Drogerie" formatının
        uğurlu nümunəsinə çevrilmişdir. Avropada geniş yayılan bu format,
        Azərbaycanda müştərilərin alış-veriş ehtiyaclarını daha müasir, rahat və
        fərqli bir şəkildə qarşılamaq məqsədilə tətbiq edilmişdir.{" "}
        <span className="font-bold">Bahar Store</span> keyfiyyətli məhsulları,
        geniş seçim imkanları və xüsusi xidmət yanaşması ilə alış-verişi zövqə
        çevirir. Şirkət davamlı olaraq müştərilərinin məmnuniyyətini artırmaq
        üçün yeni imkanlar yaradır.
      </p>
      <div className="max-w-6xl mx-auto grid gap-10 grid-cols-2 md:grid-cols-4 justify-items-center mt-20 px-3">
        <div className="flex flex-col items-center gap-3">
          <p className="text-[#3b3b3c] font-semibold">Məhsul</p>
          <h2 className="text-5xl md:text-6xl text-[#f4858b] font-semibold">
            6712
          </h2>
        </div>
        <div className="flex flex-col items-center gap-3">
          <p className="text-[#3b3b3c] font-semibold">Brend</p>
          <h2 className="text-5xl md:text-6xl text-[#f4858b] font-semibold">
            118
          </h2>
        </div>
        <div className="flex flex-col items-center gap-3">
          <p className="text-[#3b3b3c] font-semibold">Filial</p>
          <h2 className="text-5xl md:text-6xl text-[#f4858b] font-semibold">
            10
          </h2>
        </div>
        <div className="flex flex-col items-center gap-3">
          <p className="text-[#3b3b3c] font-semibold">Əməkdaş</p>
          <h2 className="text-5xl md:text-6xl text-[#f4858b] font-semibold">
            159
          </h2>
        </div>
      </div>
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10 md:gap-20 pt-20 px-3">
        <div className="md:w-[50%] flex flex-col gap-5">
          <h4 className="text-2xl lg:text-3xl font-semibold">
            Missiya və məqsədimiz
          </h4>
          <p>
            Əsas missiyamız, qadına və onun ailəsinə olan qayğımızla,
            müştərilərimizə doğru seçim etməkdə yardımçı olmaq və məhsulları
            onlara əlçatan etməkdir. Biz, peşəkar ekspert məsləhətçilərimizlə
            hər zaman yanınızdayıq və geniş məhsul çeşidimizlə sizə unikal
            alış-veriş təcrübəsi yaşadırıq. Bakıda parfümeriya və kosmetika
            məhsullarının aparıcı pərakəndə satıcısı olmaqdan qürur duyuruq.
          </p>
          <p>
            Bahar Store, hər bir qadının və onun ailəsinin sağlamlığına və
            gözəlliyinə xüsusi önəm verir. Biz, qadınların özlərinə olan inamını
            artırmaq və ailə üzvlərinin həyat keyfiyyətini yüksəltmək üçün
            buradayıq. Məqsədimiz, hər bir müştərimizin ehtiyaclarını
            qarşılayaraq, onların həyatına dəyər qatmaqdır.
          </p>
        </div>
        <img
          className="md:w-[50%] rounded-4xl"
          src="https://admin475.baharstore.az/storage//uploads/images/about/img-6731e1f99bccb.jpg"
          alt="missiya"
        />
      </div>
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10 md:gap-20 pt-20 px-3">
        <img
          className="md:w-[50%] order-1 md:-order-1 rounded-4xl"
          src="https://admin475.baharstore.az/storage//uploads/images/about/img-1718643273.jpg"
          alt="missiya"
        />
        <div className="md:w-[50%] flex flex-col gap-5">
          <h4 className="text-2xl lg:text-3xl font-semibold">
            Gələcəyə baxış və vizyon
          </h4>
          <p>
            “Bahar Store” olaraq, gələcəyə baxışımız daim yeniliklər və müştəri
            məmnuniyyəti üzərində qurulub. Bizim məqsədimiz, gözəllik və
            sağlamlıq sahəsində ən qabaqcıl trendləri izləyərək, müştərilərimizə
            ən son və keyfiyyətli məhsulları təqdim etməkdir. Hər zaman
            müştərilərimizin ehtiyaclarını diqqətlə dinləyir və onların
            gözləntilərini aşmaq üçün çalışırıq.
          </p>
          <p>
            Viziyonumuz, Azərbaycan və regionda gözəllik və sağlamlıq məhsulları
            üzrə ən güvənilən və seçilən marka olmaqdır. Bu məqsədlə, biz məhsul
            çeşidimizi genişləndirməklə yanaşı, müştərilərimizə daha fərdi və
            peşəkar xidmətlər təqdim etməyi planlaşdırırıq. “Bahar Store”
            olaraq, qadınların və ailələrinin həyatını daha da gözəlləşdirmək
            üçün hər zaman yeniliklər və inkişaflar üzərində işləməyə davam
            edəcəyik.
          </p>
        </div>
      </div>
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10 md:gap-20 pt-20 px-3">
        <div className="md:w-[50%] flex flex-col gap-5">
          <h4 className="text-2xl lg:text-3xl font-semibold">
            Müştərilər üçün
          </h4>
          <p>
            “Bahar Store” müştərilərinə sərfəli qiymətlərlə diqqətlə seçilmiş
            məhsul çeşidini təklif edir. Mağazalarda gözəllik, sağlamlıq və ev
            üçün zəruri olan əşyalar var. Buraya kosmetika və bədənə qulluq
            məhsulları, ətirlər, sağlam həyat tərzi və ailə rahatlığı üçün
            əşyalar, körpələr üçün məhsullar, eləcə də aparıcı qlobal brendlərin
            sağlamlıq məhsulları daxildir.
          </p>
          <p>
            Biz müştərilərimizin ehtiyaclarını qarşılayaraq onların həyat
            keyfiyyətini artırmağa çalışırıq. Hər bir məhsul seçimində
            keyfiyyətə və müştəri məmnuniyyətinə xüsusi önəm veririk.
          </p>
        </div>
        <img
          className="md:w-[50%] rounded-4xl"
          src="https://admin475.baharstore.az/storage//uploads/images/about/img-6731e0692c2ae.jpg"
          alt="missiya"
        />
      </div>
      <div className="bg-[#19191a] mt-20">
        <h4 className="text-white text-center text-2xl lg:text-3xl font-semibold pt-10">Galereya</h4>
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-5 py-20 px-3">
          <Gallery2 />
        </div>
      </div>
      <div className="bg-[#faf9f9] py-10 px-3">
        <div className="max-w-6xl mx-auto flex justify-between items-center mb-8 px-3">
          <h4 className="text-2xl lg:text-3xl font-semibold">Brendlər</h4>
          <Link
            to="/brendler"
            className="text-[16px] lg:text-[18px] font-semibold cursor-pointer"
          >
            Hamısını göstər
          </Link>
        </div>
        <Slider3 />
      </div>
    </>
  );
}

export default About;
