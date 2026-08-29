import React, { useContext } from "react";
import { Link, useLocation } from "react-router";
import { HiSquares2X2 } from "react-icons/hi2";
import { GoHeart } from "react-icons/go";
import { AiOutlineShopping } from "react-icons/ai";
import { BASKET } from "./context/BasketContext";  
import { FAVORITES } from "./context/FavoritesContext";
import { BiUser } from "react-icons/bi";

function MobileNav() {
  const { sebet } = useContext(BASKET);
  const { favorites } = useContext(FAVORITES);
  const location = useLocation();

  const basketCount = sebet?.length || 0;
  const favoriteCount = favorites?.length || 0;

  return (
    <div className="fixed bottom-3 left-1/2 -translate-x-1/2 w-[92%] bg-white border border-gray-200 shadow-2xl rounded-2xl px-6 py-5 flex items-center justify-between z-50 md:hidden">
      
      <Link to="/" className="flex flex-col items-center text-red-600">
        <HiSquares2X2 className="text-3xl" />
      </Link>

      <Link to="/daxilol" className="flex flex-col items-center text-[#ea0b17] transition-colors">
        <BiUser className="text-3xl" />
      </Link>

      <Link to="/sevimliler" className="flex flex-col items-center text-[#ea0b17] transition-colors relative">
        <GoHeart className="text-3xl" />
        {favoriteCount > 0 && (
          <span className="absolute -top-1 -right-2 bg-red-600 text-white text-[10px] w-4 h-4 flex items-center justify-center rounded-full font-bold">
            {favoriteCount}
          </span>
        )}
      </Link>

      <Link to="/sebet" className="flex flex-col items-center text-[#ea0b17] transition-colors relative">
        <AiOutlineShopping className="text-3xl" />
        {basketCount > 0 && (
          <span className="absolute -top-1 -right-2 bg-red-600 text-white text-[10px] w-4 h-4 flex items-center justify-center rounded-full font-bold">
            {basketCount}
          </span>
        )}
      </Link>

    </div>
  );
}

export default MobileNav;