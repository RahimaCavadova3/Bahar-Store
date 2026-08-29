import React, { useState } from 'react'
import { Link } from 'react-router'

function Forgotpassword() {
  const [phone, setPhone] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Şifrənin bərpası üçün göndərilən nömrə:", phone);
  };

  return (
    <>
      <h4 className="text-2xl lg:text-3xl font-semibold text-center mt-5">
        Şifrəmi unutdum
      </h4>
      <div className="mt-10 flex flex-col items-center justify-center px-3">
        <div className="max-w-md w-full">
          <div className="p-6 rounded-lg border border-[#eae1e1] shadow-xs md:p-8">
            <h1 className="text-[#ea0b17] text-center text-xl font-bold">
              Şifrəmi unutdum
            </h1>
            <form onSubmit={handleSubmit} className="mt-6">
              <div>
                <label
                  htmlFor="phone"
                  className="mb-2 text-[#b3b3b4] font-medium text-[12px] inline-block"
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
                  value={phone}
                  onInput={(e) =>
                    (e.target.value = e.target.value.replace(/[^0-9]/g, ""))
                  }
                  onChange={(e) => setPhone(e.target.value)}
                  className="px-3 py-2.5 text-sm text-slate-900 rounded-md bg-[#f4f4f4] outline-0 w-full"
                />
              </div>
              <button
                type="submit"
                className="w-full mt-5 py-2 px-3.5 text-sm rounded-md font-semibold cursor-pointer tracking-wide text-white border bg-black hover:bg-[#5e5e5e] transition-all"
              >
                Göndər
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Forgotpassword;