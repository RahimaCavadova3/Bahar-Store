import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import Search from "./Search";

function MobileSearchModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4 md:hidden">
      <div className="bg-white w-full max-w-lg max-h-[85vh] rounded-3xl p-4 flex flex-col relative shadow-2xl overflow-hidden">
        <div className="flex justify-end mb-2 shrink-0">
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-gray-100 cursor-pointer"
          >
            <AiOutlineClose className="text-2xl text-gray-600" />
          </button>
        </div>

        <div className="overflow-y-auto flex-1 pr-1 [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-red-500 [&::-webkit-scrollbar-thumb]:rounded-full hover:[&::-webkit-scrollbar-thumb]:bg-red-600 transition-all">
          <Search isModal={true} onCloseModal={onClose} />
        </div>
      </div>
    </div>
  );
}

export default MobileSearchModal;
