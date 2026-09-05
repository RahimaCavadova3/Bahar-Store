import React, { useState } from 'react'
import { Link } from 'react-router'

function SignupForm({ setLogin }) {
  const [fullname, setFullname] = useState('')
  const [phone, setPhone] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [agreed, setAgreed] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()

    if (password !== confirmPassword) {
      alert("Şifrələr eyni deyil!")
      return
    }

    console.log({
      fullname,
      phone,
      password,
      agreed
    })
  }

  return (
    <>
      <div className="mt-10 flex flex-col items-center justify-center px-3">
        <div className="max-w-md w-full">
          <div className="p-6 rounded-lg border border-[#eae1e1] shadow-xs md:p-8">
            <div className='flex items-center justify-center gap-5'>
              <h1 onClick={() => setLogin(true)} className="text-[#878585] hover:text-[#5f5f5f] duration-300 text-center text-[17px] font-semibold cursor-pointer">Daxil ol</h1>
              <h1 className="text-[#ea0b17] text-center text-xl font-bold cursor-pointer">Qeydiyyat</h1>
            </div>
            <form onSubmit={handleSubmit} className="space-y-6 mt-10">
               <div>
                  <label htmlFor="fullname"
                     className="mb-2 text-[#b3b3b4] font-medium text-[12px] inline-block">Ad Soyad</label>
                  <input 
                     type="text" 
                     id="fullname" 
                     name="fullname" 
                     autoComplete="name" 
                     required
                     value={fullname}
                     onChange={(e) => setFullname(e.target.value)}
                     className="px-3 py-2.5 text-sm text-slate-900 rounded-md bg-[#f4f4f4] outline-0 w-full" 
                  />
               </div>
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
               <div>
                  <label htmlFor="confirmPassword"
                     className="mb-2 text-[#b3b3b4] font-medium text-[12px] inline-block">Şifrəni təkrar et</label>
                  <input 
                     type="password" 
                     id="confirmPassword" 
                     name="confirmPassword" 
                     placeholder="••••••••" 
                     autoComplete="new-password" 
                     required 
                     value={confirmPassword}
                     onChange={(e) => setConfirmPassword(e.target.value)}
                     className="px-3 py-2.5 text-sm text-slate-900 rounded-md bg-[#f4f4f4] outline-0 w-full" 
                  />
               </div>

               <div className="flex items-center justify-between text-xs">
                  <label className="flex items-center gap-2 cursor-pointer text-[#b3b3b4] font-medium">
                     <input 
                        type="checkbox" 
                        required 
                        checked={agreed}
                        onChange={(e) => setAgreed(e.target.checked)}
                        className="accent-black w-4 h-4 rounded cursor-pointer" 
                     />
                     <span>Şərtləri oxudum, qəbul edirəm</span>
                  </label>
                  <Link to='/elaqe/gizlilik' className="text-[#878585] hover:text-[#5f5f5f] font-semibold underline">
                     Gizlilik Siyasəti
                  </Link>
               </div>

              <button 
                  type="submit"
                  disabled={!agreed}
                  className={`w-full mt-5 py-2 px-3.5 text-sm rounded-md font-semibold tracking-wide text-white border transition-all ${
                     agreed 
                        ? 'bg-black hover:bg-[#5e5e5e] cursor-pointer' 
                        : 'bg-gray-400 border-gray-400 cursor-not-allowed'
                  }`}
               >
                  Qeydiyyatdan keç
               </button>

               <a  
                  onClick={() => setLogin(true)}
                  className="ml-auto text-[#b3b3b4] font-medium text-[12px] underline cursor-pointer block text-left">
                  Daxil ol
               </a>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default SignupForm