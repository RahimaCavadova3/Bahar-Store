import React, { useState, useEffect } from "react";
import { FaPlus, FaMinus } from "react-icons/fa6";

function PriceFilter({ maxPrice, setMaxPrice, products }) {
  const [show, setShow] = useState(false);
  const [tempPrice, setTempPrice] = useState(maxPrice);

  const maxProductPrice = products && products.length > 0 
    ? Math.max(...products.map(item => Number(item.price || item.qiymet || 1000))) 
    : 1000;

  useEffect(() => {
    setTempPrice(maxProductPrice);
  }, [maxProductPrice]);

  useEffect(() => {
    setTempPrice(maxPrice);
  }, [maxPrice]);

  return (
    <>
      <div onClick={() => setShow(show => !show)} className="flex items-center justify-between py-5 cursor-pointer">
        <p className="font-semibold">Qiymət</p>
        <span className="font-semibold">
          {show ? (<FaMinus />) : (<FaPlus/>)} 
        </span>
      </div>
      <div className={`${show ? 'block' : 'hidden'} flex flex-col gap-2 pb-5`}>
        <div className="flex items-center justify-between">
          <p>Qiymət aralığı</p>
          <p>AZN 0 - {tempPrice}</p>
        </div>
        <input 
          type="range" 
          min="0" 
          max={maxProductPrice} 
          value={tempPrice}
          onChange={(e) => setTempPrice(Number(e.target.value))}
          className="accent-red-600 cursor-grab" 
        />
        <button 
          onClick={() => setMaxPrice(tempPrice)}
          className="border bg-black hover:bg-[#5e5e5e] duration-300 text-white p-2 rounded-[10px] cursor-pointer"
        >
          Axtar
        </button>
      </div>
    </>
  );
}

export default PriceFilter;