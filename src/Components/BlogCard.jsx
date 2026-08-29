import React from 'react'
import { MdOutlineWatchLater } from "react-icons/md";

function BlogCard({blog}) {
  return (
    <>
    <div className='border-0 bg-[#fafafa] overflow-hidden rounded-xl'>
        <img className='w-full h-80 object-cover hover:scale-105 duration-300 cursor-pointer' src={blog.img} alt="blogfoto" />
       <div className='flex flex-col gap-5 p-5'>
         <p className='text-[14px] font-semibold cursor-pointer'>{blog.text}</p>
         <p className='flex items-center gap-3 text-[#4b4b4b] text-[14px]'><MdOutlineWatchLater />{blog.date}</p>
       </div>
    </div>
    </>
  )
}

export default BlogCard