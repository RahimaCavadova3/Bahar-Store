import React, { useContext } from 'react'
import { BASKET } from '../context/BasketContext'
import { FAVORITES } from '../context/FavoritesContext'
import { AiOutlineShopping } from "react-icons/ai";
import { Link } from 'react-router';

const getFinalPrice = (item) => {
  const discount = Math.abs(item?.discountPercentage || 0);
  if (discount > 0) {
    return item.price - (item.price * discount) / 100;
  }
  return item?.price || 0;
};

function Basket() {
  const { sebet, increaseQuantity, decreaseQuantity, removeFromBasket } = useContext(BASKET)
  const { favorites, toggleFavorite } = useContext(FAVORITES)

  const totalPrice = sebet?.reduce((sum, item) => {
    const currentPrice = getFinalPrice(item);
    return sum + ((Number(currentPrice) || 0) * (item.quantity || 1));
  }, 0) || 0;

  const totalOriginalPrice = sebet?.reduce((sum, item) => {
    const basePrice = Number(item.price || 0);
    return sum + (basePrice * (item.quantity || 1));
  }, 0) || 0;

  const totalDiscountAmount = totalOriginalPrice - totalPrice;

  return (
    <>
      <h4 className='text-2xl lg:text-3xl font-semibold text-center mt-5'>Səbət</h4>

      {(!sebet || sebet.length === 0) ? (
        <div className='flex flex-col items-center gap-3 text-center mt-20 px-3'>
          <AiOutlineShopping className='text-3xl text-[#ea0b17]' />
          <h6 className='text-2xl font-semibold'>Səbətiniz boşdur</h6>
          <p className='text-[#676767] w-60 sm:w-64 md:w-72 lg:w-80 xl:w-96'>
            Səbətinizdə məhsul tapılmadı. Məhsullara baxmaq üçün ana səhifəyə keçid edə bilərsiniz
          </p>
          <Link to='/index' className='border hover:bg-[#19191a] hover:text-white duration-300 py-1 px-3 rounded-[6px]'>
            Ana səhifə
          </Link>
        </div>
      ) : (
        <div className='max-w-6xl mx-auto my-6 px-5 grid grid-cols-1 lg:grid-cols-3 gap-8'>
          
          <div className='lg:col-span-2'>
            <ul className='space-y-4'>
              {sebet.map((item, i) => {
                const isFavorite = favorites?.some(fav => fav.id === item.id);
                const discountVal = Math.abs(item?.discountPercentage || 0);
                const hasDiscount = discountVal > 0;
                const finalPrice = getFinalPrice(item);

                return (
                  <li 
                    key={item.id || i}
                    className="flex gap-4 bg-white px-4 py-6 rounded-md border border-slate-300 dark:bg-neutral-800 dark:border-neutral-700"
                  >
                    <div className="flex gap-6 sm:gap-4 max-sm:flex-col">
                      <div className="w-24 h-24 max-sm:w-24 max-sm:h-24 shrink-0">
                        <img src={item.image} className="w-full h-full object-contain" alt="product" />
                      </div>
                      <div className="flex flex-col gap-4">
                        <div>
                          <h3 className="text-base font-semibold text-slate-900 dark:text-slate-50">{item.title}</h3>
                          <p className="text-[13px] text-slate-600 mt-2 flex items-center gap-2 dark:text-slate-400">
                            Kateqoriya: <span className="font-medium dark:text-slate-300">{item.category}</span>
                          </p>
                        </div>
                        <div className="flex items-center gap-3">
                          {hasDiscount && (
                            <>
                              <span className='border py-1 px-2 rounded-3xl text-[#ea0b17] text-xl bg-[#feeced]'>{discountVal}%</span>
                              <p className='text-sm line-through decoration-red-500 text-slate-400'>{Number(item.price).toFixed(2)} ₼</p>
                            </>
                          )}
                          <p className="text-xl font-semibold text-slate-900 dark:text-slate-50">{Number(finalPrice).toFixed(2)} ₼</p>
                        </div>
                      </div>
                    </div>

                    <div className="ml-auto flex flex-col">
                      <div className="flex items-start gap-4 justify-end">
                        <button 
                          type="button" 
                          aria-label="add to wishlist"
                          onClick={() => toggleFavorite(item)}
                          className="cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg"
                            className={`size-4 h-4 inline-block transition-colors ${isFavorite ? 'fill-pink-600 dark:fill-pink-500' : 'fill-slate-400 hover:fill-pink-600 dark:hover:fill-pink-500'}`}
                            viewBox="0 0 64 64" aria-hidden="true">
                            <path
                              d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z"
                              data-original="#000000"></path>
                          </svg>
                        </button>

                        <button type="button" aria-label="Remove from cart" onClick={() => removeFromBasket(item.id)}
                          className="cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded">
                          <svg xmlns="http://www.w3.org/2000/svg"
                            className="size-4 fill-slate-400 hover:fill-red-600 inline-block dark:hover:fill-red-500"
                            viewBox="0 0 24 24" aria-hidden="true">
                            <path
                              d="M19 7a1 1 0 0 0-1 1v11.191A1.92 1.92 0 0 1 15.99 21H8.01A1.92 1.92 0 0 1 6 19.191V8a1 1 0 0 0-2 0v11.191A3.918 3.918 0 0 0 8.01 23h7.98A3.918 3.918 0 0 0 20 19.191V8a1 1 0 0 0-1-1Zm1-3h-4V2a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v2H4a1 1 0 0 0 0 2h16a1 1 0 0 0 0-2ZM10 4V3h4v1Z"
                              data-original="#000000"></path>
                            <path
                              d="M11 17v-7a1 1 0 0 0-2 0v7a1 1 0 0 0 2 0Zm4 0v-7a1 1 0 0 0-2 0v7a1 1 0 0 0 2 0Z"
                              data-original="#000000"></path>
                          </svg>
                        </button>
                      </div>

                      <div className="flex items-center mt-auto px-2.5 py-1.5 border border-slate-300 text-slate-900 font-medium text-xs rounded-md dark:border-neutral-700 dark:text-slate-50 dark:bg-neutral-800">
                        <button type="button" aria-label="Decrease quantity" onClick={() => decreaseQuantity(item.id)} className="cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded">
                          <svg xmlns="http://www.w3.org/2000/svg" className="w-2.5 fill-current" viewBox="0 0 124 124">
                            <path d="M112 50H12C5.4 50 0 55.4 0 62s5.4 12 12 12h100c6.6 0 12-5.4 12-12s-5.4-12-12-12z" data-original="#000000"></path>
                          </svg>
                        </button>
                        <span className="mx-3">{item.quantity || 1}</span>
                        <button type="button" aria-label="Increase quantity" onClick={() => increaseQuantity(item.id)} className="cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded">
                          <svg xmlns="http://www.w3.org/2000/svg" className="w-2.5 fill-current" viewBox="0 0 42 42">
                            <path d="M37.059 16H26V4.941C26 2.224 23.718 0 21 0s-5 2.224-5 4.941V16H4.941C2.224 16 0 18.282 0 21s2.224 5 4.941 5H16v11.059C16 39.776 18.282 42 21 42s5-2.224 5-4.941V26h11.059C39.776 26 42 23.718 42 21s-2.224-5-4.941-5z" data-original="#000000"></path>
                          </svg>
                        </button>
                      </div>
                    </div>
                  </li>
                )
              })}
            </ul>
          </div>

          <div className='bg-[#f4f4f4] p-6 rounded-lg h-max space-y-6'>
            <h3 className='text-lg font-semibold text-slate-900 text-center'>Sifariş detalları</h3>
            
            <div className='flex justify-between text-sm text-slate-600'>
              <span>Məhsullun qiyməti:</span>
              <span className='font-semibold text-slate-900'>{totalOriginalPrice.toFixed(2)} ₼</span>
            </div>

            {totalDiscountAmount > 0 && (
              <div className='flex justify-between text-sm'>
                <span className='text-slate-600'>Endirim:</span>
                <span className='font-semibold text-[#2d9d3f]'>-{totalDiscountAmount.toFixed(2)} ₼</span>
              </div>
            )}

            <hr className='border-slate-200 dark:border-neutral-700' />

            <div className='flex justify-between text-base font-bold text-[#2d9d3f]'>
              <span>Ümumi:</span>
              <span>{totalPrice.toFixed(2)} ₼</span>
            </div>

            <button className='w-full py-3 bg-[#0d0405] hover:bg-slate-800 text-white font-medium rounded-xl transition-colors cursor-pointer'>
              Sifariş et
            </button>
          </div>

        </div>
      )}
    </>
  )
}

export default Basket;