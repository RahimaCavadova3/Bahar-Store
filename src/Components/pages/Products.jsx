import React, { useEffect, useState, useContext } from "react";
import FilterSidebar from "../FilterSidebar";
import ProductCard from "../ProductCard";
import { DATA } from "../context/DataContext";

function Products() {
  const { mehsul } = useContext(DATA);
  const [product, setProduct] = useState([]);

  const [selectedCategory, setSelectedCategory] = useState(() => localStorage.getItem("selectedCategory") || '');
  const [selectedSubCategory, setSelectedSubCategory] = useState(() => localStorage.getItem("selectedSubCategory") || '');
  const [subProductIds, setSubProductIds] = useState(() => {
    const saved = localStorage.getItem("subProductIds");
    return saved ? JSON.parse(saved) : [];
  });
  
  const [selectedBrands, setSelectedBrands] = useState(() => {
    const saved = localStorage.getItem("selectedBrands");
    return saved ? JSON.parse(saved) : [];
  });

  const [selectedCountries, setSelectedCountries] = useState(() => {
    const saved = localStorage.getItem("selectedCountries");
    return saved ? JSON.parse(saved) : [];
  });

  const [maxPrice, setMaxPrice] = useState(() => {
    const saved = localStorage.getItem("maxPrice");
    return saved ? Number(saved) : 1000;
  });

  useEffect(() => {
    if (mehsul && mehsul.length > 0) {
      setProduct(mehsul);
    }
  }, [mehsul]);

  useEffect(() => {
    const handleFilterUpdate = () => {
      setSelectedCategory(localStorage.getItem("selectedCategory") || '');
      setSelectedSubCategory(localStorage.getItem("selectedSubCategory") || '');
      
      const savedSubIds = localStorage.getItem("subProductIds");
      setSubProductIds(savedSubIds ? JSON.parse(savedSubIds) : []);

      const savedBrands = localStorage.getItem("selectedBrands");
      setSelectedBrands(savedBrands ? JSON.parse(savedBrands) : []);

      const savedCountries = localStorage.getItem("selectedCountries");
      setSelectedCountries(savedCountries ? JSON.parse(savedCountries) : []);

      const savedMaxPrice = localStorage.getItem("maxPrice");
      setMaxPrice(savedMaxPrice ? Number(savedMaxPrice) : 1000);
    };

    window.addEventListener("filterUpdated", handleFilterUpdate);
    return () => {
      window.removeEventListener("filterUpdated", handleFilterUpdate);
    };
  }, []);

  useEffect(() => {
    if (selectedCategory) {
      localStorage.setItem("selectedCategory", selectedCategory);
    } else {
      localStorage.removeItem("selectedCategory");
    }
  }, [selectedCategory]);

  useEffect(() => {
    localStorage.setItem("selectedBrands", JSON.stringify(selectedBrands));
  }, [selectedBrands]);

  useEffect(() => {
    localStorage.setItem("selectedCountries", JSON.stringify(selectedCountries));
  }, [selectedCountries]);

  useEffect(() => {
    localStorage.setItem("maxPrice", maxPrice);
  }, [maxPrice]);

  const handleClearAllFilters = () => {
    localStorage.removeItem("selectedCategory");
    localStorage.removeItem("selectedSubCategory");
    localStorage.removeItem("subProductIds");
    localStorage.removeItem("selectedBrands");
    localStorage.removeItem("selectedCountries");
    localStorage.removeItem("maxPrice");

    setSelectedCategory('');
    setSelectedSubCategory('');
    setSubProductIds([]);
    setSelectedBrands([]);
    setSelectedCountries([]);
    setMaxPrice(1000);
  };

  const filteredProducts = product.filter(item => {
    const matchesSubCategory = subProductIds.length === 0 || subProductIds.some(id => String(id) === String(item.id));
    const itemCategory = item.category || item.kateqoriya || '';
    const matchesCategory = subProductIds.length > 0 || !selectedCategory || itemCategory.trim().toLowerCase() === selectedCategory.trim().toLowerCase();
    
    const matchesBrand = selectedBrands.length === 0 || selectedBrands.includes(item.brend || item.brand);
    const matchesCountry = selectedCountries.length === 0 || selectedCountries.includes(item.country || item.ölkə);
    
    const discount = Math.abs(item?.discountPercentage || item?.endirim || 0);
    const basePrice = Number(item.price || item.qiymet || 0);
    const finalPrice = discount > 0 ? basePrice - (basePrice * discount) / 100 : basePrice;

    const matchesPrice = !maxPrice || finalPrice <= maxPrice;

    return matchesCategory && matchesSubCategory && matchesBrand && matchesCountry && matchesPrice;
  });

  return (
    <>
      <div className="max-w-6xl mx-auto mt-5 px-3 flex flex-col items-center justify-center">
        <h4 className="text-2xl lg:text-3xl font-semibold text-center">
          Məhsullar
        </h4>
        
        {selectedCategory && (
          <span className="text-red-500 font-medium text-lg mt-1">
            {selectedCategory} {selectedSubCategory && `/ ${selectedSubCategory}`}
          </span>
        )}
      </div>

      <div className="max-w-6xl mx-auto mt-8 px-3 flex justify-end">
        {(selectedCategory || selectedBrands.length > 0 || selectedCountries.length > 0 || maxPrice < 1000) && (
          <button 
            onClick={handleClearAllFilters}
            className="text-sm bg-gray-100 hover:bg-gray-200 px-3 py-1.5 rounded cursor-pointer shadow-sm"
          >
            Filtri Təmizlə ✕
          </button>
        )}
      </div>

      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-5 mt-4 px-3">
        <FilterSidebar 
          selectedBrands={selectedBrands}
          setSelectedBrands={setSelectedBrands}
          selectedCountries={selectedCountries}
          setSelectedCountries={setSelectedCountries}
          maxPrice={maxPrice}
          setMaxPrice={setMaxPrice}
          products={product}
          onClearFilters={handleClearAllFilters}
        />
        
        <div className="grid gap-5 grid-cols-2 md:grid-cols-3 lg:w-[75%]">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((item, index) => (
              <ProductCard key={`${item.id}-${index}`} item={item} />
            ))
          ) : (
            <p className="col-span-full text-center text-gray-500 py-10">Bu meyarlara uyğun məhsul tapılmadı.</p>
          )}
        </div>
      </div>
    </>
  );
}

export default Products;