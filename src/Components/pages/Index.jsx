import React, { useContext, useState } from 'react'
import Slider1 from '../Slider1'
import Slider2 from '../Slider2'
import { TiStarburstOutline } from "react-icons/ti";
import { FaAward } from "react-icons/fa";
import { LuBadgePercent } from "react-icons/lu";
import ProductCard from '../ProductCard';
import Slider3 from '../Slider3';
import Slider4 from '../Slider4';
import { Link } from 'react-router';
import { DATA } from '../context/DataContext'

function Index() {
  const { mehsul } = useContext(DATA)
  
  const [activeTab, setActiveTab] = useState('bestseller')

  const handleShowAllClick = () => {
    localStorage.removeItem("selectedCategory");
    localStorage.removeItem("selectedSubCategory");
    localStorage.removeItem("subProductIds");
    localStorage.removeItem("selectedBrands");
    localStorage.removeItem("selectedCountries");
    localStorage.removeItem("maxPrice");
  };

  const filteredProducts = mehsul.filter(item => {
    if (activeTab === 'new') return item.isNew === true;
    if (activeTab === 'bestseller') return item.isBestseller === true;
    if (activeTab === 'discount') {
      const discountVal = Math.abs(item?.discountPercentage || item?.discount || 0);
      return discountVal > 0;
    }
    return true;
  });

  return (
    <>
      <Slider1/>
      <Slider2/>
      <ul className='flex justify-center items-center gap-5 text-[18px] md:text-[20px] lg:text-[22px] xl:text-[24px] font-semibold pt-30 pb-10 px-3 cursor-pointer'>
        <li 
          onClick={() => setActiveTab('new')} 
          className={`flex items-center gap-2 duration-300 ${activeTab === 'new' ? 'text-black font-bold' : 'text-[#898888b0] hover:text-black'}`}
        >
          <TiStarburstOutline className={activeTab === 'new' ? 'text-[#ec232e]' : 'text-[#898888b0]'} /> Yeni
        </li>
        <span className='text-[#898888b0]'>|</span>
        <li 
          onClick={() => setActiveTab('bestseller')} 
          className={`flex items-center gap-2 duration-300 ${activeTab === 'bestseller' ? 'text-black font-bold' : 'text-[#898888b0] hover:text-black'}`}
        >
          <FaAward className={activeTab === 'bestseller' ? 'text-[#ec232e]' : 'text-[#898888b0]' }/> Bestseller
        </li>
        <span className='text-[#898888b0]'>|</span>
        <li 
          onClick={() => setActiveTab('discount')} 
          className={`flex items-center gap-2 duration-300 ${activeTab === 'discount' ? 'text-black font-bold' : 'text-[#898888b0] hover:text-black'}`}
        >
          <LuBadgePercent className={activeTab === 'discount' ? 'text-[#ec232e]' : 'text-[#898888b0]'} /> Endirim
        </li>
      </ul>
      <div className='grid gap-5 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-6xl mx-auto pb-20 px-3'>
        {filteredProducts.map((item, index) => (
          <ProductCard key={`${item.id}-${index}`} item={item} />
        ))}
      </div>
      <Link 
        to="/mehsullar" 
        onClick={handleShowAllClick}
        className='flex items-center justify-center border-0 shadow bg-[#0d0405] text-white font-semibold text-[14px] lg:text-[16px] mx-auto w-44 sm:w-48 md:w-52 lg:w-56 xl:w-60 py-3 rounded-xl mb-10 cursor-pointer'
      >
        Hamısını Göstər
      </Link>
      <div className='bg-[#faf9f9] py-10 px-3'>
          <div className='max-w-6xl mx-auto flex justify-between items-center mb-8 px-3'>
            <h4 className='text-2xl lg:text-3xl font-semibold'>Brendlər</h4>
            <Link to='/brendler' className='text-[16px] lg:text-[18px] font-semibold cursor-pointer'>Hamısını göstər</Link>
          </div>
          <Slider3 />
      </div>
      <div className='bg-[#19191a]'>
        <div className='flex flex-col gap-5 lg:gap-0 lg:flex-row items-center justify-between max-w-6xl mx-auto py-20 px-3'>
          <div className='w-full lg:w-[20%] flex flex-col gap-10'>
            <h3 className='text-[#5c5b5c] text-2xl lg:text-3xl font-semibold'>Bahar Store: Keyfiyyətli gözəllik baxım məhsullarının tək ünvanı!</h3>
            <Link to='/bloq' className='text-white text-[16px] lg:text-[18px] font-semibold cursor-pointer'>Hamısını Göstər</Link>
          </div>
          <Slider4/>
        </div>
      </div>
    </>
  )
}

export default Index