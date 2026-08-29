import React, { useState, useRef } from 'react'

const faqData = [
   {
      question: "Mənə uyğun olmayan məhsulu geri qaytara bilərəmmi?",
      answer: "Bəli, istifadə olunmamış və orijinal vəziyyətdə olması şərti ilə məhsulu aldıqdan sonra 14 gün ərzində geri qaytara bilərsiniz."
   },
   {
      question: "Sizdə satılan mallar originaldırmı?",
      answer: "Bəli, bizim mağazalarda satılan məhsulların hammısı 100% original və sertifikatlarla tərtif olunublar."
   },
   {
      question: "Endirimlər və ya  promosyonlar təklif edirsiniz?",
      answer: "Bəli, biz müntəzəm olaraq promosyonlar keçiririk və müxtəlif kateqoriyalı məhsullara endirimlər edirik."
   },
   {
      question: "Necə sifariş verə bilərəm?",
      answer: "Seçilmiş malları səbətinizə əlavə etməklə və sifarişi tamamlamaq üçün lazımi məlumatları doldurmaqla saytımız vasitəsilə sifariş verə bilərsiniz."
   },
   {
      question: "Hansı növ məhsullar təklif edirsiniz?",
      answer: "Biz dəriyə qulluq, makiyaj, saç baxımı və şəxsi gigiyena daxil olmaqla geniş çeşiddə kosmetik məhsullar təklif edirik. "
   },
   {
      question: "Sifarişləri mənim bölgəmə çatdırırsınız?",
      answer: "Biz poçt xidmətlərindən istifadə edərək ölkə daxilində çatdırırıq. Minimum sifariş məbləği 50 AZN-dir və poçtla çatdırılma haqqı tətbiq edilir."
   },
   {
      question: "Yeni gələn məhsullar və endirimlər haqqında necə xəbərdar ola bilərəm?",
      answer: "Yeni gələn məhsullar, eksklüziv endirimlər və xüsusi təkliflərdən xəbərdar olmaq üçün bizə abunə olun və bizi sosial mediada izləyin."
   },
   {
      question: "Zədələnmiş və ya qüsurlu məhsul alsam nə etməliyəm?",
      answer: "Zədələnmiş və ya qüsurlu məhsul alsanız, sifarişinizi aldıqdan dərhal sonra müştəri dəstəyi ilə əlaqə saxlayın. Biz əşyanın dəyişdirilməsini və ya qaytarılmasını təşkil edəcəyik."
   },
   {
      question: "Sifarişimi yerləşdirdikdən sonra onu dəyişdirə və ya ləğv edə bilərəmmi?",
      answer: "Sifarişiniz hələ göndərilməyibsə, mümkün qədər tez müştəri dəstəyi ilə əlaqə saxlayaraq onu dəyişdirə və ya ləğv edə bilərsiniz. Zəhmət olmasa sifariş nömrənizi hazırlayın."
   }
];

function Faq() {
    const [openIndex, setOpenIndex] = useState(0);
    const contentRefs = useRef([]);

  return (
    <>
    <section>
            <div className="divide-y divide-slate-300 dark:divide-neutral-700">
               {faqData.map((item, index) => {
                  const isOpen = openIndex === index;

                  return (
                     <div key={index} className="py-6">
                        <h3 id={`faq-heading-${index}`}>
                           <button
                              type="button"
                              aria-expanded={isOpen}
                              aria-controls={`faq-panel-${index}`}
                              onClick={() => setOpenIndex(isOpen ? null : index)}
                              className="toggle-button cursor-pointer w-full text-base outline-none font-semibold text-slate-900 flex items-center focus-visible:ring-2 focus-visible:ring-blue-500 rounded dark:text-slate-50"
                           >
                              <span className="mr-4 text-left">{item.question}</span>
                              <svg
                                 xmlns="http://www.w3.org/2000/svg"
                                 viewBox="0 0 512 512"
                                 className="size-3.5 fill-current ml-auto shrink-0 transition-transform duration-300"
                                 aria-hidden="true"
                              >
                                 <path d="M40.421 215.579H471.579C493.868 215.579 512 233.711 512 256s-18.132 40.421-40.421 40.421H40.421C18.132 296.421 0 278.289 0 256s18.132-40.421 40.421-40.421z" />
                                 <path
                                    className={`transition-opacity duration-300 ${isOpen ? 'opacity-0' : 'opacity-100'}`}
                                    d="M215.579 40.421C215.579 18.132 233.711 0 256 0s40.421 18.132 40.421 40.421v431.158C296.421 493.868 278.289 512 256 512s-40.421-18.132-40.421-40.421V40.421z"
                                 />
                              </svg>
                           </button>
                        </h3>

                        <div
                           id={`faq-panel-${index}`}
                           role="region"
                           aria-labelledby={`faq-heading-${index}`}
                           aria-hidden={!isOpen}
                           ref={(el) => (contentRefs.current[index] = el)}
                           style={{
                              maxHeight: isOpen ? `${contentRefs?.current[index]?.scrollHeight}px` : '0px',
                           }}
                           className={`content overflow-hidden transition-all duration-300 ease-in-out ${!isOpen ? 'invisible' : ''}`}
                        >
                           <div className="mt-4">
                              <p className="text-base text-slate-600 leading-relaxed dark:text-slate-400">
                                 {item.answer}
                              </p>
                           </div>
                        </div>
                     </div>
                  );
               })}
            </div>
      </section>
    </>
  )
}

export default Faq