import React, { useState } from "react";
import { FiPhone } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import { RiInstagramLine } from "react-icons/ri";
import { RiFacebookCircleLine } from "react-icons/ri";
import { RiTiktokFill } from "react-icons/ri";
import { RiYoutubeLine } from "react-icons/ri";

function Connection() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Sualınız uğurla göndərildi!");
    console.log("Göndərilən məlumatlar:", formData);
    
    setFormData({
      name: "",
      phone: "",
      email: "",
      message: ""
    });
  };

  return (
    <>
      <div className="flex flex-col gap-10">
        <div className="flex flex-col gap-3">
          <h4 className="text-[18px] font-semibold">Əlaqə</h4>
          <div className="flex flex-col lg:flex-row lg:items-center gap-5 lg:gap-8 xl:gap-16">
            <a
              href="tel:+994502280309"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-[#eae1e1] hover:bg-[#ea0b17] hover:text-white duration-300 hover:border-[#ea0b17] shrink-0 rounded-3xl py-2 px-5 flex items-center justify-center lg:justify-start gap-2 cursor-pointer"
            >
              <FiPhone />
              +994 50 228 03 09
            </a>
            <a
              href="https://wa.me/994502280309"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-[#eae1e1] hover:bg-[#ea0b17] hover:text-white duration-300 hover:border-[#ea0b17] shrink-0 rounded-3xl py-2 px-5 flex items-center justify-center lg:justify-start gap-2 cursor-pointer"
            >
              <FaWhatsapp />
              WhatsApp
            </a>
            <a
              href="mailto:info@baharstore.az"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-[#eae1e1] hover:bg-[#ea0b17] hover:text-white duration-300 hover:border-[#ea0b17] shrink-0 rounded-3xl py-2 px-5 flex items-center justify-center lg:justify-start gap-2 cursor-pointer"
            >
              <FiMail />
              info@baharstore.az
            </a>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row gap-5 lg:gap-40">
          <div className="flex flex-col gap-3">
            <h4 className="text-[18px] font-semibold">Sosial Media</h4>
            <div className="flex gap-3">
              <a href='https://www.facebook.com/Baharstore' target='_blank' rel="noopener noreferrer" className="border border-[#eae1e1] hover:bg-[#ea0b17] hover:text-white duration-300 hover:border-[#ea0b17] shrink-0 w-12 h-12 flex items-center justify-center rounded-[50%] cursor-pointer">
                <RiFacebookCircleLine className="text-xl" />
              </a>
              <a href='https://www.instagram.com/baharstore.az' target='_blank' rel="noopener noreferrer" className="border border-[#eae1e1] hover:bg-[#ea0b17] hover:text-white duration-300 hover:border-[#ea0b17] shrink-0 w-12 h-12 flex items-center justify-center rounded-[50%] cursor-pointer">
                <RiInstagramLine className="text-xl" />
              </a>
              <a href='https://www.tiktok.com/@baharstore.az' target='_blank' rel="noopener noreferrer" className="border border-[#eae1e1] hover:bg-[#ea0b17] hover:text-white duration-300 hover:border-[#ea0b17] shrink-0 w-12 h-12 flex items-center justify-center rounded-[50%] cursor-pointer">
                <RiTiktokFill className="text-xl" />
              </a>
              <a href='https://www.youtube.com/@Baharstore.az2017' target='_blank' rel="noopener noreferrer" className="border border-[#eae1e1] hover:bg-[#ea0b17] hover:text-white duration-300 hover:border-[#ea0b17] shrink-0 w-12 h-12 flex items-center justify-center rounded-[50%] cursor-pointer">
                <RiYoutubeLine className="text-xl" />
              </a>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <h4 className="text-[18px] font-semibold">Ünvan</h4>
            <p>Ələddin Quliyev küç. 11/31 AZ1025</p>
            <p className="text-[#ea0b17]">
              İş saatları (həftə içi): 9:00-18:00
            </p>
          </div>
        </div>
        <div>
          <h4 className="text-[18px] font-semibold pb-3">Sualınız var?</h4>
          <form
            onSubmit={handleSubmit}
            className="space-y-4 flex flex-col lg:flex-row justify-between gap-10"
          >
            <div className="flex flex-col gap-3 w-full lg:w-[50%]">
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 text-[#ababab] text-[12px] font-medium inline-block"
                >
                  Ad Soyad
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="px-3 py-2.5 text-sm text-slate-900 w-full rounded-md bg-[#f4f4f4] outline-0"
                />
              </div>
              <div>
                <label
                  htmlFor="phone"
                  className="mb-2 text-[#ababab] text-[12px] font-medium text-sm inline-block"
                >
                  Nömrə
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  placeholder="+994"
                  maxLength={9}
                  required
                  value={formData.phone}
                  onInput={(e) =>
                    (e.target.value = e.target.value.replace(/[^0-9]/g, ""))
                  }
                  onChange={handleChange}
                  className="px-3 py-2.5 text-sm text-slate-900 w-full rounded-md bg-[#f4f4f4] outline-0"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="mb-2 text-[#ababab] text-[12px] font-medium text-sm inline-block"
                >
                  E-poçt
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="px-3 py-2.5 text-sm text-slate-900 w-full rounded-md bg-[#f4f4f4] outline-0"
                />
              </div>
            </div>
            <div className="flex flex-col gap-5 w-full lg:w-[50%]">
              <div>
                <label
                  htmlFor="message"
                  className="mb-2 text-[#ababab] text-[12px] font-medium text-sm inline-block"
                >
                  Mesaj
                </label>
                <textarea
                  rows="6"
                  id="message"
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className="px-3 py-2.5 text-sm text-slate-900 w-full rounded-md bg-[#f4f4f4] outline-0"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-2.5 px-4 text-sm rounded-md font-semibold cursor-pointer text-white border bg-black hover:bg-[#5e5e5e] transition-all"
              >
                Göndər
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Connection;