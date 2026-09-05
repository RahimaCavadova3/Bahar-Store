import React, { useContext } from "react";
import { GoHeart } from "react-icons/go";
import { AiOutlineShopping } from "react-icons/ai";
import { FaAward } from "react-icons/fa";
import { LuBadgePercent } from "react-icons/lu";
import { IoIosTrendingDown } from "react-icons/io";
import { TiStarburstOutline } from "react-icons/ti";
import { BASKET } from "./context/BasketContext";
import { FAVORITES } from "./context/FavoritesContext";
import { Link } from "react-router";

const getFinalPrice = (item) => {
  const discount = Math.abs(item?.discountPercentage || 0);
  if (discount > 0) {
    return item.price - (item.price * discount) / 100;
  }
  return item?.price || 0;
};

function ProductCard({ item }) {
  const { addBasket, sebet } = useContext(BASKET);
  const { favorites, toggleFavorite } = useContext(FAVORITES);

  const isFavorite = favorites?.some((fav) => fav.id === item.id);
  const isInBasket = sebet?.some((basketItem) => basketItem.id === item.id);

  const discountVal = Math.abs(item?.discountPercentage || 0);
  const hasDiscount = discountVal > 0;
  const finalPrice = getFinalPrice(item);

  const handleAddToBasket = () => {
    if (item?.isOutOfStock || isInBasket) return;

    addBasket(
      item.id,
      item.image,
      item.title,
      item.discountPercentage,
      item.price, 
      finalPrice,
      item.category,
    );
  };

  function slugify(text) {
    return text
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "");
  }

  return (
    <Link
      to={`/mehsul/${slugify(item.title)}`}
      className="border h-[500px] xl:h-[450px] relative hover:shadow-xl duration-300 flex flex-col gap-3 rounded-2xl border-[#eae1e1] p-5"
    >
      <div className="flex md:hidden flex-wrap items-center gap-1.5 mb-1">
        {item?.isOutOfStock && (
          <span className="border w-8 h-8 flex items-center justify-center text-[#e77e11] bg-[#f9ebdb] rounded-full shadow-sm">
            <IoIosTrendingDown className="text-base" />
          </span>
        )}
        {item?.isNew && (
          <span className="border w-8 h-8 flex items-center justify-center text-[#1e68b9] bg-[#e4f0fc] rounded-full shadow-sm">
            <TiStarburstOutline className="text-lg" />
          </span>
        )}
        {item?.isBestseller && (
          <span className="border w-8 h-8 flex items-center justify-center text-[#2d9d3f] bg-[#ebfdee] rounded-full shadow-sm">
            <FaAward className="text-sm" />
          </span>
        )}
        {hasDiscount && (
          <span className="border w-8 h-8 flex items-center justify-center text-[#dc545b] bg-[#feeced] rounded-full shadow-sm">
            <LuBadgePercent className="text-sm" />
          </span>
        )}
      </div>
      <img
        className="hover:scale-105 duration-300 h-48 object-contain"
        src={item?.image}
        alt={item?.title}
      />
      <p className="font-semibold text-[14px] md:text-[16px]">
        {item?.title?.length > 40
          ? item.title.slice(0, 40) + "..."
          : item?.title}
      </p>
      <div className="flex items-center gap-3 flex-wrap">
        {hasDiscount && (
          <span className="border border-[#dc545b] bg-[#feeced] text-[#dc545b] text-[12px] py-1 px-2 rounded-2xl">
            {discountVal}%
          </span>
        )}
        {hasDiscount && (
          <p className="text-[#303030] text-[14px] md:text-[16px] font-semibold line-through decoration-red-500">
            {Number(item.price).toFixed(2)} ₼
          </p>
        )}
        <p className="text-xl md:text-2xl font-semibold">
          {Number(finalPrice).toFixed(2)} ₼
        </p>
      </div>
      <div className="hidden md:flex items-center gap-3 flex-wrap">
        {item?.isBestseller && (
          <span className="border flex items-center gap-1 py-1 px-2 rounded-2xl text-[#2d9d3f] bg-[#ebfdee] text-[14px]">
            <FaAward /> Bestseller
          </span>
        )}
        {hasDiscount && (
          <span className="border flex items-center gap-1 py-1 px-2 rounded-2xl text-[#dc545b] bg-[#feeced] text-[14px]">
            <LuBadgePercent /> Endirim
          </span>
        )}
      </div>
      <div className="flex items-center gap-2 mt-auto">
        <span
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            toggleFavorite(item);
          }}
          className="border-2 border-[#eae1e1] p-1 rounded-[8px] shrink-0 cursor-pointer flex items-center justify-center"
        >
          <GoHeart
            className={`text-2xl md:text-3xl ${isFavorite ? "text-red-600 fill-red-600" : "text-[#5e5e5e]"}`}
          />
        </span>

        <button
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            handleAddToBasket();
          }}
          disabled={item?.isOutOfStock || isInBasket}
          className={`flex items-center justify-center border-0 w-[80%] shrink-0 gap-1 font-semibold shadow rounded-xl p-2 text-[13px] lg:text-[15px] whitespace-nowrap transition-all duration-300 ${
            item?.isOutOfStock
              ? "bg-white border-2 border-[#ea0b17] text-[#ea0b17] cursor-not-allowed"
              : isInBasket
                ? "bg-white border-2 border-[#008000] text-[#008000] cursor-default"
                : "bg-[#0d0405] text-white cursor-pointer"
          }`}
        >
          {!item?.isOutOfStock && !isInBasket && (
            <AiOutlineShopping className="text-[18px] lg:text-[20px] shrink-0" />
          )}

          {item?.isOutOfStock
            ? "Stokda yoxdur"
            : isInBasket
              ? "Əlavə olundu"
              : "Səbətə at"}
        </button>
      </div>
      {item?.isOutOfStock && (
        <span className="border absolute hidden md:flex items-center justify-center gap-1 text-[#e77e11] text-[14px] bg-[#f9ebdb] py-1 px-2 rounded-2xl left-5 top-5">
          <IoIosTrendingDown /> Stokda yoxdur
        </span>
      )}
      {item?.isNew && (
        <span className="border absolute hidden md:flex items-center justify-center gap-1 text-[#1e68b9] text-[14px] bg-[#e4f0fc] py-1 px-2 rounded-2xl right-5 top-5">
          <TiStarburstOutline /> Yeni
        </span>
      )}
    </Link>
  );
}

export default ProductCard;