import React, { useState } from "react";
import BrendFilter from "./BrendFilter";
import { MdOutlineFilterList } from "react-icons/md";
import PriceFilter from "./PriceFilter";
import CountryFilter from "./CountryFilter";

function FilterSidebar({ selectedBrands, setSelectedBrands, selectedCountries, setSelectedCountries, maxPrice, setMaxPrice, products, onClearFilters }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      <div className="lg:w-[25%] p-3">
        <div className="flex items-center justify-between pb-5">
          <MdOutlineFilterList 
            onClick={() => setIsOpen(!isOpen)} 
            className="text-3xl cursor-pointer" 
          />
          
          <p onClick={handleClose} className="cursor-pointer text-red-600 font-medium lg:hidden">
            Bağla
          </p>
        </div>
        <hr className="text-[#eae1e1]" />
        
        <div className={`${isOpen ? "block" : "hidden"} lg:block`}>
          <BrendFilter 
            selectedBrands={selectedBrands} 
            setSelectedBrands={setSelectedBrands} 
            products={products} 
          />
          <hr className="text-[#eae1e1]" />
          <PriceFilter 
            maxPrice={maxPrice} 
            setMaxPrice={setMaxPrice} 
            products={products}
          />
          <hr className="text-[#eae1e1]" />
          <CountryFilter 
            selectedCountries={selectedCountries} 
            setSelectedCountries={setSelectedCountries} 
            products={products} 
          />
        </div>
      </div>
    </>
  );
}

export default FilterSidebar;