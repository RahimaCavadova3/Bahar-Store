import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { FaPlus, FaMinus } from "react-icons/fa6";

function BrendFilter({ selectedBrands, setSelectedBrands, products }) {
  const [show, setShow] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const uniqueBrands = [...new Set(products.map(item => item.brend))].filter(Boolean);

  const filteredBrandsList = uniqueBrands.filter(brand => 
    brand.toLocaleLowerCase('az').includes(searchTerm.toLocaleLowerCase('az'))
  );

  const handleCheckboxChange = (brand) => {
    if (selectedBrands.includes(brand)) {
      setSelectedBrands(selectedBrands.filter(b => b !== brand));
    } else {
      setSelectedBrands([...selectedBrands, brand]);
    }
  };

  return (
    <>
      <div onClick={() => setShow(show => !show)} className="flex items-center justify-between py-5 cursor-pointer">
        <p className="font-semibold">Brendlər</p>
        <span className="font-semibold">
          {show ? (<FaMinus />) : (<FaPlus/>)}
        </span>
      </div>
      <div className={`${show ? 'block' : 'hidden'} flex flex-col gap-2 pb-5`}>
        <div className="flex items-center gap-2 border-b">
          <CiSearch />
          <input
            className="outline-hidden w-full p-1"
            type="search"
            placeholder="Axtar"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="overflow-y-auto max-h-40 flex flex-col gap-2 pr-1 [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-thumb]:bg-red-600 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100">
          {filteredBrandsList.map((brand, index) => (
            <div key={index} className="flex items-center gap-2 cursor-pointer" onClick={() => handleCheckboxChange(brand)}>
              <input 
                className="w-4 h-4 cursor-pointer" 
                type="checkbox" 
                checked={selectedBrands.includes(brand)}
                onChange={() => {}} 
              />
              <p>{brand}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default BrendFilter;