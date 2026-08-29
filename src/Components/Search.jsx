import React, { useContext, useRef, useEffect } from "react";
import { CiSearch } from "react-icons/ci";
import { DATA } from "./context/DataContext";
import { Link } from "react-router";

function Search({ isModal, onCloseModal }) {
  const { mehsul, axtar, setAxtar } = useContext(DATA);
  const searchRef = useRef(null);

  const filtrproduct =
    axtar && mehsul
      ? mehsul.filter(
          (item) =>
            item.title?.toLowerCase().includes(axtar.toLocaleLowerCase()) ||
            item.category
              ?.toLocaleLowerCase()
              .includes(axtar.toLocaleLowerCase()),
        )
      : [];

  useEffect(() => {
    if (isModal) return;

    function handleClickOutside(event) {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setAxtar("");
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isModal, setAxtar]);

  function slugify(text) {
    return text
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "");
  }

  return (
    <div
      ref={searchRef}
      onMouseDown={(e) => e.stopPropagation()}
      className={`flex flex-col border-2 border-[#eae1e1] rounded-2xl w-full bg-white box-border ${!isModal ? "relative md:w-[500px]" : ""}`}
    >
      {/* Input hissəsi */}
      <div className="flex items-center gap-3 p-3 w-full">
        <CiSearch className="text-[#5e5e5e] text-2xl shrink-0" />
        <input
          className="p-1 outline-0 w-full bg-transparent text-black [&::-webkit-search-cancel-button]:hidden"
          type="search"
          placeholder="Axtar"
          value={axtar}
          onChange={(e) => setAxtar(e.target.value)}
        />
      </div>

      {/* Nəticə Dropdown-u */}
      {axtar && (
        <div
          className={`bg-white py-3 px-4 w-full border-t border-[#eae1e1] overflow-y-auto [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-red-500 [&::-webkit-scrollbar-thumb]:rounded-full hover:[&::-webkit-scrollbar-thumb]:bg-red-600 transition-all ${
            isModal
              ? "max-h-[350px] rounded-b-2xl"
              : "absolute top-full left-0 z-50 mt-2 h-[350px] shadow-lg rounded-2xl border"
          }`}
        >
          {filtrproduct.length === 0 ? (
            <div className="py-8 flex items-center justify-center">
              <p className="text-gray-500 text-center">Nəticə tapılmadı</p>
            </div>
          ) : (
            filtrproduct.map((item, i) => (
              <Link
                to={`/mehsul/${slugify(item.title)}`}
                key={i}
                className="flex items-center gap-3 px-4 py-2 my-2 border border-[#eae1e1] rounded-xl hover:bg-gray-50 cursor-pointer"
                onClick={() => {
                  setAxtar("");
                  if (onCloseModal) onCloseModal();
                }}
              >
                <img
                  src={item.image}
                  alt="product"
                  className="w-12 h-12 object-cover rounded shrink-0"
                />
                <div>
                  <p className="text-sm font-semibold">{item.title}</p>
                  <span className="text-xs text-slate-400">
                    {item.category}
                  </span>

                  <div className="flex items-center gap-2 mt-1">
                    {(item.discount || item.discountPercentage) ? (
                      <>
                        <span className="text-xs bg-[#feeced] text-[#ea0b17] border px-2 py-0.5 rounded-full font-bold">
                          {item.discount || item.discountPercentage}
                        </span>
                        <span className="text-xs text-slate-400 line-through decoration-red-500">
                          {Number(item?.oldPrice || item?.price).toFixed(2)} ₼
                        </span>
                        <span className="text-sm font-bold text-black">
                          {Number(item?.price).toFixed(2)} ₼
                        </span>
                      </>
                    ) : (
                      <span className="text-sm font-bold text-black">
                        {Number(item?.price).toFixed(2)} ₼
                      </span>
                    )}
                  </div>
                </div>
              </Link>
            ))
          )}
        </div>
      )}
    </div>
  );
}

export default Search;