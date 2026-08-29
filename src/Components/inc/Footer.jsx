import React from 'react'
import Logo from '/src/assets/logo.svg'
import { RiInstagramLine } from "react-icons/ri";
import { RiFacebookCircleLine } from "react-icons/ri";
import { RiTiktokFill } from "react-icons/ri";
import { RiYoutubeLine } from "react-icons/ri";
import { FiPhone } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import { Link } from 'react-router';

function Footer() {
  const handleCategoryClick = (categoryName) => {
    localStorage.setItem("selectedCategory", categoryName);
    localStorage.removeItem("selectedSubCategory");
    localStorage.removeItem("subProductIds");
    
    if (window.location.pathname === '/mehsullar') {
      window.location.reload();
    }
  };

  const handleBranchClick = (branchName) => {
    localStorage.setItem("selectedBranchName", branchName);
    if (window.location.pathname === '/filiallar') {
      window.location.reload();
    }
  };

  return (
    <>
    <div className='max-w-6xl mx-auto pt-30 pb-10 px-3 flex gap-4 flex-col md:flex-row justify-between'>
      <div className='flex flex-col gap-5'>
        <Link to='/index'><img className='w-28 xl:w-40 cursor-pointer' src={Logo} alt="logo" /></Link>
        <div className='flex gap-5'>
          <a href='https://www.instagram.com/baharstore.az' target='_blank' rel="noopener noreferrer" className='border-2 border-[#eee] hover:border-[#ea0b17] hover:bg-[#ea0b17] hover:text-white duration-300 cursor-pointer flex items-center justify-center w-8 h-8 rounded-[50%] p-1'><RiInstagramLine className='text-xl' /></a>
          <a href='https://www.facebook.com/Baharstore' target='_blank' rel="noopener noreferrer" className='border-2 border-[#eee] hover:border-[#ea0b17] hover:bg-[#ea0b17] hover:text-white duration-300 cursor-pointer flex items-center justify-center w-8 h-8 rounded-[50%] p-1'><RiFacebookCircleLine className='text-xl' /></a>
          <a href='https://www.tiktok.com/@baharstore.az' target='_blank' rel="noopener noreferrer" className='border-2 border-[#eee] hover:border-[#ea0b17] hover:bg-[#ea0b17] hover:text-white duration-300 cursor-pointer flex items-center justify-center w-8 h-8 rounded-[50%] p-1'><RiTiktokFill className='text-xl' /></a>
          <a href='https://www.youtube.com/@Baharstore.az2017' target='_blank' rel="noopener noreferrer" className='border-2 border-[#eee] hover:border-[#ea0b17] hover:bg-[#ea0b17] hover:text-white duration-300 cursor-pointer flex items-center justify-center w-8 h-8 rounded-[50%] p-1'><RiYoutubeLine className='text-xl' /></a>
        </div>
      </div>
      <div className='flex flex-col gap-3'>
        <h5 className='text-xl lg:text-2xl font-semibold'>Kateqoriyalar</h5>
        <ul className='flex flex-col gap-3 font-semibold text-[#757576]'>
          <Link to='/mehsullar' onClick={() => handleCategoryClick('Günəşdən qorunma')} className='hover:text-[#ea0b17] hover:underline duration-300 cursor-pointer'>Günəşdən qorunma</Link>
          <Link to='/mehsullar' onClick={() => handleCategoryClick('Hədiyyələr')} className='hover:text-[#ea0b17] hover:underline duration-300 cursor-pointer'>Hədiyyələr</Link>
          <Link to='/mehsullar' onClick={() => handleCategoryClick('Makiyaj')} className='hover:text-[#ea0b17] hover:underline duration-300 cursor-pointer'>Makiyaj</Link>
          <Link to='/mehsullar' onClick={() => handleCategoryClick('Üz baxımı')} className='hover:text-[#ea0b17] hover:underline duration-300 cursor-pointer'>Üz baxımı</Link>
          <Link to='/mehsullar' onClick={() => handleCategoryClick('Parfümeriya')} className='hover:text-[#ea0b17] hover:underline duration-300 cursor-pointer'>Parfümeriya</Link>
          <Link to='/mehsullar' onClick={() => handleCategoryClick('Saç')} className='hover:text-[#ea0b17] hover:underline duration-300 cursor-pointer'>Saç</Link>
          <Link to='/mehsullar' onClick={() => handleCategoryClick('Gigiyena')} className='hover:text-[#ea0b17] hover:underline duration-300 cursor-pointer'>Gigiyena</Link>
          <Link to='/mehsullar' onClick={() => handleCategoryClick('Uşaqlar üçün')} className='hover:text-[#ea0b17] hover:underline duration-300 cursor-pointer'>Uşaqlar üçün</Link>
          <Link to='/mehsullar' onClick={() => handleCategoryClick('Bədən Baxımı')} className='hover:text-[#ea0b17] hover:underline duration-300 cursor-pointer'>Bədən Baxımı</Link>
          <Link to='/mehsullar' onClick={() => handleCategoryClick('Aksesuarlar')} className='hover:text-[#ea0b17] hover:underline duration-300 cursor-pointer'>Aksesuarlar</Link>
          <Link to='/mehsullar' onClick={() => handleCategoryClick('Digər')} className='hover:text-[#ea0b17] hover:underline duration-300 cursor-pointer'>Digər</Link>
        </ul>
      </div>
      <div className='flex flex-col gap-3'>
        <h5 className='text-xl lg:text-2xl font-semibold'>Filiallar</h5>
        <ul className='flex flex-col gap-3 font-semibold text-[#757576]'>
          <Link to='/filiallar' onClick={() => handleBranchClick('28 Mall')} className='hover:text-[#ea0b17] hover:underline duration-300 cursor-pointer'>28 Mall</Link>
          <Link to='/filiallar' onClick={() => handleBranchClick('Azadlıq')} className='hover:text-[#ea0b17] hover:underline duration-300 cursor-pointer'>Azadlıq</Link>
          <Link to='/filiallar' onClick={() => handleBranchClick('Həzi Aslanov')} className='hover:text-[#ea0b17] hover:underline duration-300 cursor-pointer'>Həzi Aslanov</Link>
          <Link to='/filiallar' onClick={() => handleBranchClick('Park Bulvar')} className='hover:text-[#ea0b17] hover:underline duration-300 cursor-pointer'>Park Bulvar</Link>
          <Link to='/filiallar' onClick={() => handleBranchClick('N. Nərimanov')} className='hover:text-[#ea0b17] hover:underline duration-300 cursor-pointer'>N. Nərimanov</Link>
          <Link to='/filiallar' onClick={() => handleBranchClick('Elmlər Akademiyası')} className='hover:text-[#ea0b17] hover:underline duration-300 cursor-pointer'>Elmlər Akademiyası</Link>
          <Link to='/filiallar' onClick={() => handleBranchClick('Əhmədli')} className='hover:text-[#ea0b17] hover:underline duration-300 cursor-pointer'>Əhmədli</Link>
          <Link to='/filiallar' onClick={() => handleBranchClick('Fəvvarələr meydanı')} className='hover:text-[#ea0b17] hover:underline duration-300 cursor-pointer'>Fəvvarələr meydanı</Link>
          <Link to='/filiallar' onClick={() => handleBranchClick('Rəşid Behbudov')} className='hover:text-[#ea0b17] hover:underline duration-300 cursor-pointer'>Rəşid Behbudov</Link>
          <Link to='/filiallar' onClick={() => handleBranchClick('Yasamal')} className='hover:text-[#ea0b17] hover:underline duration-300 cursor-pointer'>Yasamal</Link>
        </ul>
      </div>
      <div className='flex flex-col gap-3'>
        <h5 className='text-xl lg:text-2xl font-semibold'>Bahar Store</h5>
        <ul className='flex flex-col gap-3 font-semibold text-[#757576]'>
          <Link to='/haqqimizda' className='hover:text-[#ea0b17] hover:underline duration-300 cursor-pointer'>Haqqımızda</Link>
          <Link to='/brendler' className='hover:text-[#ea0b17] hover:underline duration-300 cursor-pointer'>Brendlər</Link>
          <Link to='/bloq' className='hover:text-[#ea0b17] hover:underline duration-300 cursor-pointer'>Bloq</Link>
        </ul>
      </div>
      <div className='flex flex-col gap-3'>
        <h5 className='text-xl lg:text-2xl font-semibold'>Əlaqə</h5>
        <div className='flex flex-col gap-3'>
          <a href='tel:+994502280309' target='_blank' rel="noopener noreferrer" className='flex items-center gap-2 font-semibold text-[#757576] hover:text-[#ea0b17] hover:underline duration-300 cursor-pointer'><FiPhone className='text-black text-xl' />+994 50 228 03 09</a>
          <a href='https://wa.me/994502280309' target='_blank' rel="noopener noreferrer" className='flex items-center gap-2 font-semibold text-[#757576] hover:text-[#ea0b17] hover:underline duration-300 cursor-pointer'><FaWhatsapp className='text-black text-xl' />WhatsApp</a>
          <a href='mailto:info@baharstore.az' target='_blank' rel="noopener noreferrer" className='flex items-center gap-2 font-semibold text-[#757576] hover:text-[#ea0b17] hover:underline duration-300 cursor-pointer'><FiMail className='text-black text-xl' />info@baharstore.az</a>
        </div>
      </div>
    </div>
    <p className='text-center text-[#757576] text-[15px] font-semibold pb-5'>© Bahar Store 2017 - 2026</p>
    </>
  )
}

export default Footer