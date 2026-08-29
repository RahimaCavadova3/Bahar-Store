import React from 'react'
import Card1 from '/src/assets/e30e5c86-9824-11ef-b112-729a079d6c66_25.avif'
import Card2 from '/src/assets/8b15d706-9825-11ef-bd61-ae1dffb57268_50.avif'
import Card3 from '/src/assets/b49bbcee-9825-11ef-a897-e60b15dd5a2e_100.avif'

function Loyalty() {
  return (
    <>
    <p className='pb-5'>Bahar Store Loyallıq Kartı:</p>
    <ul className='flex flex-col gap-3'>
      <li><span className='text-[#ea0b17] font-semibold'>•</span> Hər alış-verişin 2%-i bonus olaraq kartınıza “cash back” şəkilində geri qayıdır.</li>
      <li><span className='text-[#ea0b17] font-semibold'>•</span> Toplanan bonusları növbəti alış-verişdə tam şəkildə istifadə edə bilərsiniz.</li>
    </ul>
    <h5 className='font-bold py-3'>Bahar Store Hədiyyə Kartları:</h5>
    <div className='flex flex-col gap-3'>
      <p><span className='text-[#ea0b17] font-semibold'>•</span> 25 AZN</p>
      <img className='w-60' src={Card1} alt="card" />
      <p><span className='text-[#ea0b17] font-semibold'>•</span> 50 AZN</p>
      <img className='w-60' src={Card2} alt="card" />
      <p><span className='text-[#ea0b17] font-semibold'>•</span> 100 AZN</p>
      <img className='w-60' src={Card3} alt="card" />
    </div>
    </>
  )
}

export default Loyalty