import React, { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";

function CountryFilter({ selectedCountries, setSelectedCountries, products }) {
  const [show, setShow] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const uniqueCountries = [...new Set(products.map(item => item.country))].filter(Boolean);

  const filteredCountriesList = uniqueCountries.filter(country => 
    country.toLocaleLowerCase('az').includes(searchTerm.toLocaleLowerCase('az'))
  );

  const handleCheckboxChange = (country) => {
    if (selectedCountries.includes(country)) {
      setSelectedCountries(selectedCountries.filter(c => c !== country));
    } else {
      setSelectedCountries([...selectedCountries, country]);
    }
  };

  return (
    <>
      <div
        onClick={() => setShow((show) => !show)}
        className="flex items-center justify-between py-5 cursor-pointer"
      >
        <p className="font-semibold">Ölkə</p>
        <span className="font-semibold">{show ? <FaMinus /> : <FaPlus />}</span>
      </div>
      <div className={`${show ? "block" : "hidden"} flex flex-col gap-2 pb-5`}>
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
          {filteredCountriesList.map((country, index) => (
            <div key={index} className="flex items-center gap-2 cursor-pointer" onClick={() => handleCheckboxChange(country)}>
              <input 
                type="checkbox" 
                className="w-4 h-4 cursor-pointer"
                checked={selectedCountries.includes(country)}
                onChange={() => {}}
              />
              <p className="hover:text-[#8c8c8c] duration-300">{country}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default CountryFilter;