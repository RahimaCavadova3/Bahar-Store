import React from 'react'
import { FiPhone } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { SlLocationPin } from "react-icons/sl";

function BranchCard({branch, onShowMap}) {
  return (
    <>
    <div className='border border-[#eae1e1] shadow rounded-2xl overflow-hidden flex items-center gap-5 lg:gap-10'>
        <img className='w-[40%] h-full object-cover hover:scale-105 duration-300 cursor-pointer' src={branch.img} alt={branch.name}/>
        <div className='flex flex-col gap-3 pr-3 py-3'>
            <h4 className='text-[16px] md:text-[20px] font-semibold'>{branch.name}</h4>
            <a href={`tel:${branch.phone}`} target="_blank" rel="noopener noreferrer" className='flex items-center gap-2 font-semibold text-[12px] md:text-[16px] text-[#757576] hover:text-[#ea0b17] hover:underline duration-300 cursor-pointer'><FiPhone className='shrink-0 text-black text-[16px] lg:text-[20px]'/>{branch.phone}</a>
            <a href={`https://wa.me/${branch.phone.replace(/[^0-9]/g, '')}`} target="_blank" rel="noopener noreferrer" className='flex items-center gap-2 font-semibold text-[12px] md:text-[16px] text-[#757576] hover:text-[#ea0b17] hover:underline duration-300 cursor-pointer'><FaWhatsapp className='shrink-0 text-black text-[16px] lg:text-[20px]'/>WhatsApp</a>
            <span className='flex items-center gap-2 font-semibold text-[12px] md:text-[16px] text-[#757576]'><SlLocationPin  className='shrink-0 text-black text-[16px] lg:text-[20px]' />{branch.location}</span>
            <p onClick={onShowMap} className='font-semibold underline underline-offset-4 text-[#ea0b17] cursor-pointer'>Xəritədə göstər</p>
        </div>
    </div>
    </>
  )
}

export default BranchCard