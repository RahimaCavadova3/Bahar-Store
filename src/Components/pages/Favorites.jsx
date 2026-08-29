import React, { useContext } from "react";
import { PiPlus } from "react-icons/pi";
import { Link } from "react-router";
import { FAVORITES } from "../context/FavoritesContext";
import ProductCard from "../ProductCard";

function Favorites() {
  const { favorites } = useContext(FAVORITES);

  return (
    <>
      <h4 className="text-2xl lg:text-3xl font-semibold text-center mt-5">
        Favoritlər
      </h4>

      {favorites && favorites.length > 0 && (
        <div className="max-w-6xl mx-auto my-10 px-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {favorites.map((item, i) => (
            <ProductCard key={item.id || i} item={item} />
          ))}
        </div>
      )}

      <div className="max-w-6xl mx-auto my-12 px-3 flex justify-center">
        <Link
          to="/mehsullar"
          className="border-2 border-[#eae1e1] hover:text-[#ea0b17] duration-300 rounded-2xl flex flex-col gap-2 justify-center items-center w-60 h-44 cursor-pointer bg-white"
        >
          <PiPlus className="text-4xl" />
          <p className="text-[16px] font-semibold">Məhsullara keçid edin</p>
        </Link>
      </div>
    </>
  );
}

export default Favorites;