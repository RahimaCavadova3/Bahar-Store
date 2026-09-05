import React, { useState } from 'react'
import { Link } from 'react-router'

function LoginForm({ setLogin }) {
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    console.log("Daxil edilən nömrə:", phone);
    console.log("Daxil edilən şifrə:", password);
  }

  return (
    <>
         <div className="mt-10 flex flex-col items-center justify-center px-3">
            <div className="max-w-md w-full">
               <div
                  className="p-6 rounded-lg border border-[#eae1e1] shadow-xs md:p-8">
                  <div className='flex items-center justify-center gap-5'>
                     <h1 onClick={() => setLogin(true)} className="text-[#ea0b17] text-center text-xl font-bold cursor-pointer">Daxil ol</h1>
                     <h1 onClick={() => setLogin(false)} className="text-[#878585] hover:text-[#5f5f5f] duration-300 text-center text-[17px] font-semibold cursor-pointer">Qeydiyyat</h1>
                  </div>
                  <form onSubmit={handleSubmit} className="space-y-6 mt-10">
                     <div>
                        <label htmlFor="phone"
                           className="mb-2 text-[#b3b3b4] font-medium text-[12px] inline-block">Nömrə</label>
                        <div className="flex items-center rounded-md bg-[#f4f4f4] overflow-hidden">
                           <span className="pl-3 text-sm text-slate-700 font-medium select-none">
                              +994
                           </span>
                           <input 
                              type="tel" 
                              id="phone" 
                              name="phone" 
                              autoComplete="tel" 
                              maxLength={9} 
                              required 
                              value={phone}
                              onInput={(e) => e.target.value = e.target.value.replace(/[^0-9]/g, '')}
                              onChange={(e) => setPhone(e.target.value)}
                              className="px-2 py-2.5 text-sm text-slate-900 bg-transparent outline-0 w-full" 
                           />
                        </div>
                     </div>
                     <div>
                        <label htmlFor="password"
                           className="mb-2 text-[#b3b3b4] font-medium text-[12px] inline-block">Şifrə</label>
                        <input 
                           type="password" 
                           id="password" 
                           name="password" 
                           placeholder="••••••••" 
                           autoComplete="current-password" 
                           required 
                           value={password}
                           onChange={(e) => setPassword(e.target.value)}
                           className="px-3 py-2.5 text-sm text-slate-900 rounded-md bg-[#f4f4f4] outline-0 w-full" 
                        />
                     </div>
                     <Link to='/sifremiunutdum'
                           className="ml-auto text-[#b3b3b4] font-medium text-[12px] underline cursor-pointer">
                           Şifrəmi unutdum
                     </Link>
                    <button type="submit"
                        className="w-full mt-5 py-2 px-3.5 text-sm rounded-md font-semibold cursor-pointer tracking-wide text-white border bg-black hover:bg-[#5e5e5e] transition-all">
                        Daxil ol</button>
                  </form>
               </div>
            </div>
         </div>
    </>
  )
}

export default LoginForm