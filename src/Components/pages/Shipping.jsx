import React from 'react'

function Shipping() {
  return (
    <>
    <h5 className='font-bold'>Çatdırılma Şərtləri</h5>
    <h5 className='font-bold py-3'>Ödəniş Şərtləri</h5>
    <ul className='text-[#e11307] font-semibold flex flex-col gap-2'>
        <li>• 40 AZN-dək olan sifarişlərin ödənişi yalnız sayt üzərindən onlayn qəbul olunur.</li>
        <li>• 40 AZN və yuxarı sifarişlərin ödənişi həm nağd, həm də onlayn şəkildə qəbul olunur.</li>
    </ul>
    <h5 className='font-semibold py-3'>1. Metroya Çatdırılma</h5>
    <ul className='font-semibold flex flex-col gap-2'>
        <li>
            <span className='text-[#e11307]'>•</span> Əhmədli — çatdırılma ödənişsiz.
        </li>
        <li>
            <span className='text-[#e11307]'>•</span> Həzi Aslanov — çatdırılma ödənişsiz.
        </li>
        <li>
            <span className='text-[#e11307]'>•</span> İnşaatçılar — çatdırılma ödənişsiz.
        </li>
        <li>
            <span className='text-[#e11307]'>•</span> 28 May — çatdırılma ödənişsiz.
        </li>
        <li>
            <span className='text-[#e11307]'>•</span> Sahil — çatdırılma ödənişsiz.
        </li>
    </ul>
    <h5 className='font-semibold py-3'>2. Şəhər Daxilində Çatdırılma</h5>
    <ul className='font-semibold flex flex-col gap-2'>
        <li>
            <span className='text-[#e11307]'>•</span> Saat 17:00-dək verilən sifarişlər eyni gün çatdırılır.
        </li>
        <li>
            <span className='text-[#e11307]'>•</span> Saat 17:00-dan sonra verilən sifarişlər növbəti gün çatdırılır.
        </li>
        <li>
            <span className='text-[#e11307]'>•</span> 50 AZN və yuxarı məbləğdə sifarişlər üçün çatdırılma pulsuzdur.
        </li>
        <li>
            <span className='text-[#e11307]'>•</span> 50 AZN-dək sifarişlər üçün çatdırılma haqqı 5 AZN təşkil edir.
        </li>
    </ul>
    <h5 className='font-semibold py-3'>3. Şəhərətrafı Ərazilərə Çatdırılma</h5>
    <ul className='font-semibold flex flex-col gap-2'>
        <li>
            <span className='text-[#e11307]'>•</span> 100 AZN və yuxarı sifarişlər üçün çatdırılma pulsuzdur.
        </li>
        <li>
            <span className='text-[#e11307]'>•</span> 100 AZN-dək sifarişlər üçün çatdırılma haqqı 10 AZN təşkil edir.
        </li>
    </ul>
    <p className='text-[#e11307] font-semibold py-3'>Qeyd: Nəğd ödənişlə verilən sifarişlər növbəti gün çatdırılır.</p>
    <hr className='text-[#0a0a0a]'/>
    <h5 className='font-bold py-3'>Geri Qaytarma Şərtləri</h5>
    <ul className='font-semibold flex flex-col gap-2'>
        <li>
            <span className='text-[#e11307]'>•</span> Sifariş etdiyiniz məhsulları alış-veriş etdiyiniz gündən etibarən 14 gün ərzində qəbzdə göstərilən “Bahar Store” MMC-nin filialında dəyişə və ya qaytara bilərsiniz.
        </li>
        <li>
            <span className='text-[#e11307]'>•</span> Mağazaya gələn zaman məhsulu və qəbzi təqdim etməyiniz xahiş olunur.
        </li>
        <li>
            <span className='text-[#e11307]'>•</span> Qəbz təqdim olunmadan məhsulun geri qaytarılması mümkün deyil.
        </li>
        <li>
            <span className='text-[#e11307]'>•</span> Əgər məhsul müştəriyə çatdırıldığı zaman son istifadə tarixi keçməmişdirsə və qablaşdırmasında ciddi qüsur yoxdursa, məhsulun çatdırılma anında kuryerə geri qaytarılması qəbul edilmir.
        </li>
    </ul>
    </>
  )
}

export default Shipping