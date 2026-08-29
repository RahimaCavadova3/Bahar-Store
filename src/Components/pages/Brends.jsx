import React, { useState } from "react";

function Brends() {
  const [selectedLetter, setSelectedLetter] = useState("Hamısı");

  const alphabet = ["Hamısı", "A", "B", "C", "D", "E", "F", "G", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "V", "W", "В", "К", "М"];

  const brandsData = [
    {
      letter: "I",
      items: [
        { id: 1, type: "text", content: "ICEBERG", count: "2 məhsul" }
      ]
    },
    {
      letter: "P",
      items: [
        { id: 2, type: "text", content: "POSH+POP", count: "2 məhsul" },
        { id: 3, type: "image", content: "https://admin475.baharstore.az/storage/uploads/images/brands/img_1774959735.png", count: "4 məhsul" },
        { id: 4, type: "text", content: "PINK SUGAR", count: "2 məhsul" },
      ]
    },
    {
      letter: "N",
      items: [
        { id: 5, type: "image", content: "https://admin475.baharstore.az/storage/uploads/images/brands/img_1776321046.png", count: "3 məhsul" },
        { id: 6, type: "image", content: "https://admin475.baharstore.az/storage//uploads/images/brands/nuvaria-68999aaf7a093.png", count: "3 məhsul" }
      ]
    },
    {
      letter: "J",
      items: [
        { id: 7, type: "text", content: "JAGUAR", count: "2 məhsul" },
        { id: 8, type: "text", content: "JMsolution", count: "2 məhsul" },
        { id: 9, type: "image", content: "https://admin475.baharstore.az/storage/uploads/images/brands/img_1776347208.jpg", count: "3 məhsul" }
      ]
    },
    {
      letter: "S",
      items: [
        { id: 10, type: "text", content: "STALEKS", count: "2 məhsul" },
        { id: 11, type: "image", content: "https://admin475.baharstore.az/storage/uploads/images/brands/img_1776347436.jpg", count: "2 məhsul" }
      ]
    },
    {
      letter: "B",
      items: [
        { id: 12, type: "image", content: "https://admin475.baharstore.az/storage/uploads/images/brands/img_1776322207.png", count: "2 məhsul" },
      ]
    },
    {
      letter: "G",
      items: [
        { id: 13, type: "image", content: "https://admin475.baharstore.az/storage/uploads/images/brands/img_1776321023.jpg", count: "4 məhsul" }
      ]
    },
    {
      letter: "R",
      items: [
        { id: 14, type: "image", content: "https://admin475.baharstore.az/storage/uploads/images/brands/img_1776321014.jpg", count: "20 məhsul" },
      ]
    },
    {
      letter: "L",
      items: [
        { id: 15, type: "image", content: "https://admin475.baharstore.az/storage/uploads/images/brands/img_1776347216.png", count: "3 məhsul" },
        { id: 16, type: "image", content: "https://admin475.baharstore.az/storage/uploads/images/brands/img_1776321025.jpg", count: "4 məhsul" },
        { id: 17, type: "image", content: "https://admin475.baharstore.az/storage/uploads/images/brands/img_1774959736.jpg", count: "4 məhsul" },
      ]
    },
    {
      letter: "D",
      items: [
        { id: 18, type: "image", content: "https://admin475.baharstore.az/storage/uploads/images/brands/img_1776321044.png", count: "3 məhsul" },
        { id: 19, type: "image", content: "https://admin475.baharstore.az/storage/uploads/images/brands/img_1776347205.jpg", count: "2 məhsul" },
      ]
    },
    {
      letter: "M",
      items: [
        { id: 20, type: "image", content: "https://admin475.baharstore.az/storage/uploads/images/brands/img_1776347196.png", count: "1 məhsul" },
      ]
    },
    {
      letter: "T",
      items: [
        { id: 21, type: "text", content: "TY", count: "1 məhsul" },
      ]
    },
    {
      letter: "A",
      items: [
        { id: 22, type: "text", content: "ATOA", count: "1 məhsul" },
      ]
    },
    {
      letter: "W",
      items: [
        { id: 23, type: "text", content: "WHSK", count: "2 məhsul" },
        { id: 24, type: "text", content: "Weawer", count: "2 məhsul" }
      ]
    },
    {
      letter: "F",
      items: [
        { id: 25, type: "image", content: "https://admin475.baharstore.az/storage/uploads/images/brands/img_1733823278.jpg", count: "3 məhsul" },
      ]
    },
    { letter: "Q", items: [{ id: 26, type: "text", content: "QURAN", count: "1 məhsul" }] },
    {
      letter: "V",
      items: [
        { id: 27, type: "image", content: "https://admin475.baharstore.az/storage/uploads/images/brands/img_1733824738.jpg", count: "1 məhsul" },
        { id: 28, type: "image", content: "https://admin475.baharstore.az/storage/uploads/images/brands/img_1776347184.jpg", count: "1 məhsul" }
      ]
    },
    {
      letter: "E",
      items: [
        { id: 29, type: "text", content: "EDA TASPINAR", count: "2 məhsul" }
      ]
    },
    {
      letter: "O",
      items: [
        { id: 30, type: "image", content: "https://admin475.baharstore.az/storage/uploads/images/brands/img_1776347192.jpg", count: "1 məhsul" },
        { id: 31, type: "image", content: "https://admin475.baharstore.az/storage/uploads/images/brands/img_1776347425.jpg", count: "1 məhsul" }
      ]
    },
    {
      letter: "C",
      items: [
        { id: 32, type: "image", content: "https://admin475.baharstore.az/storage/uploads/images/brands/img_1776321041.jpg", count: "2 məhsul" },
        { id: 33, type: "image", content: "https://admin475.baharstore.az/storage/uploads/images/brands/img_1733823275.jpg", count: "2 məhsul" }
      ]
    },
    { letter: "K", items: [{ id: 34, type: "text", content: "KLERAL", count: "2 məhsul" }] },
    { letter: "В", items: [{ id: 35, type: "image", content: "https://admin475.baharstore.az/storage/uploads/images/brands/img_1767970183.jpg", count: "2 məhsul" }] },
    { letter: "М", items: [{ id: 36, type: "image", content: "https://admin475.baharstore.az/storage/uploads/images/brands/img_1776347180.jpg", count: "2 məhsul" }] },
    { letter: "К", items: [{ id: 37, type: "text", content: "Косметичка", count: "4 məhsul" }] }
  ];

  const filteredBrands = selectedLetter === "Hamısı" ? brandsData : brandsData.filter((g) => g.letter === selectedLetter);

  const totalCount = filteredBrands.reduce((acc, group) => acc + group.items.length, 0);

  return (
    <>
      <h4 className="text-2xl lg:text-3xl font-semibold text-center mt-5">Brendlər</h4>

      <ul className="max-w-6xl mx-auto flex overflow-x-auto pt-10 px-3 pb-2 [&::-webkit-scrollbar]:h-1.5 [&::-webkit-scrollbar-thumb]:bg-red-600 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100">
        {alphabet.map((item, index) => (
          <li
            key={index}
            onClick={() => setSelectedLetter(item)}
            className={`shrink-0 border-0 font-semibold text-[13px] md:text-[15px] h-10 flex items-center justify-center cursor-pointer duration-300 ${
              item === "Hamısı" ? "w-18" : "w-10"
            } ${
              selectedLetter === item
                ? "bg-black text-white rounded-[6px]"
                : "bg-[#f4f4f4] text-black hover:bg-black hover:text-white hover:rounded-[6px]"
            } ${index === alphabet.length - 1 ? "rounded-r-[6px]" : ""}`}
          >
            {item}
          </li>
        ))}
      </ul>

      <div className="max-w-6xl mx-auto px-3 pt-10">
        <p className="text-sm text-gray-500">{totalCount} brend</p>
      </div>

      <div className="max-w-6xl mx-auto py-5 px-3 flex flex-col gap-8">
        {filteredBrands.map((group, index) => (
          <div key={index} className="flex flex-col md:flex-row md:items-center gap-4 md:gap-10 pb-8 border-b border-gray-200 last:border-b-0">
            <h4 className="text-xl text-[#bababa] font-bold w-full text-center md:w-auto md:text-left">{group.letter}</h4>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 md:flex md:flex-wrap gap-6 md:gap-10 items-center justify-center md:justify-start w-full">
              {group.items.map((brand) => (
                <div key={brand.id} className="flex flex-col items-center">
                  <div className="w-32 h-32 flex items-center justify-center">
                    {brand.type === "image" ? (
                      <img className="max-w-full max-h-full object-contain" src={brand.content} alt="brend" />
                    ) : (
                      <p className="text-center font-medium">{brand.content}</p>
                    )}
                  </div>
                  <p className="text-xs text-gray-500 mt-1">{brand.count}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Brends;