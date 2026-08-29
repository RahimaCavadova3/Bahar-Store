import React from 'react'

function Payment() {
  return (
    <>
    <p className='pb-5'>"Bahar store" mağazalar şəbəkəsindən və ya online satış zamanı ödəniş aşağıdakı yollarla edilə bilər:</p>
    <ul className='flex flex-col gap-3'>
      <li><span className='text-[#ea0b17] font-semibold'>•</span> Onlayn ödəniş</li>
      <li><span className='text-[#ea0b17] font-semibold'>•</span> Çatdırılma zamanı yerin ödəniş</li>
      <li><span className='text-[#ea0b17] font-semibold'>•</span> Mağazada ödəniş</li>
      <li><span className='text-[#ea0b17] font-semibold'>•</span> Taksit kartları ilə ödəniş</li>
      <li><span className='text-[#ea0b17] font-semibold'>•</span> Bank əməliyyatı (köçürmə yolu ilə)</li>
      <p>Korporativ müştərilər üçün müqavilə əsasında rəsmi elektron qəbz, qiymət razılaşması protokolu və elektron vergi hesab-fakturası təqdim edilir.</p>
    </ul>
    </>
  )
}

export default Payment