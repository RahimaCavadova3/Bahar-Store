import React from 'react'
import { MdOutlinePhone } from "react-icons/md";
import { GoQuestion } from "react-icons/go";
import { TfiTruck } from "react-icons/tfi";
import { SlPresent } from "react-icons/sl";
import { PiCreditCardLight } from "react-icons/pi";
import { IoCheckmarkCircleOutline } from "react-icons/io5";
import { Link, useLocation } from 'react-router';

function ContactSidebar() {
  const location = useLocation();
  const currentPath = location.pathname;
  
  return (
    <>
      {/* Desktop üçün */}
      <ul className='border-0 rounded-2xl bg-[#f9f9f9] w-80 max-h-[500px] hidden lg:flex flex-col pl-10 pt-10 pb-10 shrink-0'>
        <Link 
          to='/elaqe' 
          className={`${currentPath === '/elaqe' ? 'bg-white' : ''} border-0 rounded-l-4xl p-5 flex items-center gap-5 text-[17px] font-semibold cursor-pointer`}
        >
          <MdOutlinePhone className={`${currentPath === '/elaqe' ? 'text-[#ea0b17]' : ''} shrink-0`} />Əlaqə
        </Link>
        <Link 
          to='/elaqe/faq' 
          className={`${currentPath === '/elaqe/faq' ? 'bg-white' : ''} border-0 rounded-l-4xl p-5 flex items-center gap-5 text-[17px] font-semibold cursor-pointer`}
        >
          <GoQuestion className={`${currentPath === '/elaqe/faq' ? 'text-[#ea0b17]' : ''} shrink-0`} />FAQ
        </Link>
        <Link 
          to='/elaqe/catdirilma' 
          className={`${currentPath === '/elaqe/catdirilma' ? 'bg-white' : ''} border-0 rounded-l-4xl p-5 flex items-center gap-5 text-[17px] font-semibold cursor-pointer`}
        >
          <TfiTruck className={`${currentPath === '/elaqe/catdirilma' ? 'text-[#ea0b17]' : ''} shrink-0`} />Çatdırılma və geri qaytarma şərtləri
        </Link>
        <Link 
          to='/elaqe/loyalliq' 
          className={`${currentPath === '/elaqe/loyalliq' ? 'bg-white' : ''} border-0 rounded-l-4xl p-5 flex items-center gap-5 text-[17px] font-semibold cursor-pointer`}
        >
          <SlPresent className={`${currentPath === '/elaqe/loyalliq' ? 'text-[#ea0b17]' : ''} shrink-0`} />Loyallıq proqramı
        </Link>
        <Link 
          to='/elaqe/odenis' 
          className={`${currentPath === '/elaqe/odenis' ? 'bg-white' : ''} border-0 rounded-l-4xl p-5 flex items-center gap-5 text-[17px] font-semibold cursor-pointer`}
        >
          <PiCreditCardLight className={`${currentPath === '/elaqe/odenis' ? 'text-[#ea0b17]' : ''} shrink-0`} />Ödəniş şərtləri
        </Link>
        <Link 
          to='/elaqe/gizlilik' 
          className={`${currentPath === '/elaqe/gizlilik' ? 'bg-white' : ''} border-0 rounded-l-4xl p-5 flex items-center gap-5 text-[17px] font-semibold cursor-pointer`}
        >
          <IoCheckmarkCircleOutline className={`${currentPath === '/elaqe/gizlilik' ? 'text-[#ea0b17]' : ''} shrink-0`} />Gizlilik Siyasəti
        </Link>
      </ul>

      {/* Mobil üçün */}
      <ul className='border border-[#f9f9f9] flex gap-5 p-3 lg:hidden overflow-x-auto w-full mb-5 [&::-webkit-scrollbar]:h-1.5 [&::-webkit-scrollbar-thumb]:bg-red-600 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100'>
        <Link to='/elaqe' className={`${currentPath === '/elaqe' ? 'bg-white font-bold' : ''} flex items-center gap-2 shrink-0 p-2 rounded-lg`}>
          <MdOutlinePhone className={currentPath === '/elaqe' ? 'text-[#ea0b17]' : ''} />Əlaqə
        </Link>
        <Link to='/elaqe/faq' className={`${currentPath === '/elaqe/faq' ? 'bg-white font-bold' : ''} flex items-center gap-2 shrink-0 p-2 rounded-lg`}>
          <GoQuestion className={currentPath === '/elaqe/faq' ? 'text-[#ea0b17]' : ''} />FAQ
        </Link>
        <Link to='/elaqe/catdirilma' className={`${currentPath === '/elaqe/catdirilma' ? 'bg-white font-bold' : ''} flex items-center gap-2 shrink-0 p-2 rounded-lg`}>
          <TfiTruck className={currentPath === '/elaqe/catdirilma' ? 'text-[#ea0b17]' : ''} />Çatdırılma və geri qaytarma şərtləri
        </Link>
        <Link to='/elaqe/loyalliq' className={`${currentPath === '/elaqe/loyalliq' ? 'bg-white font-bold' : ''} flex items-center gap-2 shrink-0 p-2 rounded-lg`}>
          <SlPresent className={currentPath === '/elaqe/loyalliq' ? 'text-[#ea0b17]' : ''} />Loyallıq proqramı
        </Link>
        <Link to='/elaqe/odenis' className={`${currentPath === '/elaqe/odenis' ? 'bg-white font-bold' : ''} flex items-center gap-2 shrink-0 p-2 rounded-lg`}>
          <PiCreditCardLight className={currentPath === '/elaqe/odenis' ? 'text-[#ea0b17]' : ''} />Ödəniş şərtləri
        </Link>
        <Link to='/elaqe/gizlilik' className={`${currentPath === '/elaqe/gizlilik' ? 'bg-white font-bold' : ''} flex items-center gap-2 shrink-0 p-2 rounded-lg`}>
          <IoCheckmarkCircleOutline className={currentPath === '/elaqe/gizlilik' ? 'text-[#ea0b17]' : ''} />Gizlilik Siyasəti
        </Link>
      </ul>
    </>
  )
}

export default ContactSidebar