import React, { useContext } from 'react'
import { DATA } from '../context/DataContext'
import { BASKET } from '../context/BasketContext'
import { FAVORITES } from '../context/FavoritesContext'
import { useParams } from 'react-router'
import { LuBadgePercent } from 'react-icons/lu'
import { FaAward } from 'react-icons/fa'
import { GoHeart } from 'react-icons/go'
import { AiOutlineShopping } from 'react-icons/ai'
import { IoIosTrendingDown } from 'react-icons/io'
import { TiStarburstOutline } from 'react-icons/ti'

const getFinalPrice = (item) => {
  const discount = Math.abs(item?.discountPercentage || 0);
  if (discount > 0) {
    return item.price - (item.price * discount) / 100;
  }
  return item?.price || 0;
};

function slugify(text) {
    return text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')
  }

function Detail() {
  const { slug } = useParams()
  const { mehsul } = useContext(DATA)
  
  const { addBasket, sebet } = useContext(BASKET)
  const { favorites, toggleFavorite } = useContext(FAVORITES)

  const product = mehsul.find(item => slugify(item.title) === slug)
  
  if(mehsul.length === 0) {
    return (
      <div className="flex flex-col m-8 rounded shadow-md w-60 sm:w-80 animate-pulse h-96">
        <div className="h-48 rounded-t dark:bg-gray-300"></div>
        <div className="flex-1 px-4 py-8 space-y-4 sm:p-8 dark:bg-gray-50">
          <div className="w-full h-6 rounded dark:bg-gray-300"></div>
          <div className="w-full h-6 rounded dark:bg-gray-300"></div>
          <div className="w-3/4 h-6 rounded dark:bg-gray-300"></div>
        </div>
      </div>
    );
  }
  if(!product){
    return (
      <div className='max-w-6xl mx-auto text-center pt-30 px-3'>
        <p>Application error: a server-side exception has occurred while loading baharstore.az (see the server logs for more information).</p>
        <p>Digest: 4146663534</p>
      </div>
    );
  }

  const isFavorite = favorites?.some(fav => fav.id === product.id);
  const isInBasket = sebet?.some(basketItem => basketItem.id === product.id);
  
  const discountVal = Math.abs(product?.discountPercentage || 0);
  const hasDiscount = discountVal > 0;
  const finalPrice = getFinalPrice(product);

  const handleAddToBasket = () => {
    if (product?.isOutOfStock || isInBasket) return;
    addBasket(
      product.id,
      product.image,
      product.title,
      product.discountPercentage,
      product.price,
      finalPrice,
      product.category
    );
  };

  return (
    <>
    <h4 className='text-2xl lg:text-3xl font-semibold text-center mt-5'>{product.brend}</h4>
    <div className="max-w-6xl mx-auto px-3 pt-20 font-sans text-gray-800">

      <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start">
        
        <div className="md:col-span-6 flex gap-4">
          <div className="flex flex-col gap-3">
            <div className="border border-[#eae1e1] rounded-xl p-2 w-20 h-20 flex items-center justify-center cursor-pointer bg-white shadow-sm">
              <img src={product.image} alt={product.title} className="w-full h-full rounded object-contain" />
            </div>
          </div>

          <div className="flex-1 border border-[#eae1e1] rounded-2xl p-8 flex items-center justify-center bg-white relative shadow-sm min-h-[400px]">
            <img src={product.image} alt={product.title} className="w-48 h-48 rounded object-contain" />
          </div>
        </div>

        <div className="md:col-span-6 flex flex-col gap-4">
          
          <h1 className="text-xl md:text-2xl font-bold text-gray-900 leading-snug">
            {product.title}
          </h1>

          <hr className="border-gray-100 my-2" />

          <div className="flex items-center gap-2 flex-wrap">
            {hasDiscount && (
              <span className="flex items-center gap-1 text-[#dc545b] bg-[#feeced] text-xs font-semibold px-3 py-1.5 rounded-full border border-red-100">
                  <LuBadgePercent /> Endirim
              </span>
            )}
            {product?.isNew && (
              <span className="flex items-center gap-1 text-[#1e68b9] bg-[#e4f0fc] text-xs font-semibold px-3 py-1.5 rounded-full border border-[#1e68b9]">
                  <TiStarburstOutline /> Yeni
              </span>
            )}
            {product?.isBestseller && (
              <span className="flex items-center gap-1 text-[#2d9d3f] bg-[#ebfdee] text-xs font-semibold px-3 py-1.5 rounded-full border border-[#2d9d3f]">
                  <FaAward /> Bestseller
              </span>
            )}
            {product?.isOutOfStock && (
              <span className="flex items-center gap-1 text-[#e77e11] bg-[#f9ebdb] text-xs font-semibold px-3 py-1.5 rounded-full border border-[#e77e11]">
                  <IoIosTrendingDown /> Stokda yoxdur
              </span>
            )}
          </div>

          <div className="mt-2">
            <h3 className="font-semibold text-gray-900 mb-3">Məhsulun xüsusiyyətləri</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-3">
                <span className="text-gray-400 w-20">BREND:</span>
                <span className="bg-gray-100 px-3 py-1 rounded-md font-medium text-gray-700">{product.brend}</span>
              </div>
              {product?.country && (
                <div className="flex items-center gap-3">
                <span className="text-gray-400 w-20">ÖLKƏ:</span>
                <span className="bg-gray-100 px-3 py-1 rounded-md font-medium text-gray-700">{product.country}</span>
              </div>
              )}
            </div>
          </div>

          <div className="flex items-center justify-between bg-white border border-[#eae1e1] p-4 rounded-2xl shadow-sm mt-4">
            <div className="flex items-center gap-3">
              {hasDiscount && (
                <span className="bg-[#feeced] text-[#ea0b17] border border-red-200 font-bold text-sm px-2.5 py-1 rounded-full">
                    {discountVal}%
                </span>
              )}
              <div>
                {hasDiscount && (
                  <p className="text-gray-400 text-xs line-through decoration-red-500 font-semibold">
                    {Number(product.price).toFixed(2)} ₼
                  </p>
                )}
                <p className="text-xl md:text-2xl font-bold text-black">
                  {Number(finalPrice).toFixed(2)} ₼
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <span 
                onClick={() => toggleFavorite(product)}
                className="border border-[#eae1e1] p-3 rounded-xl cursor-pointer hover:bg-gray-50 transition-colors flex items-center justify-center"
              >
                <GoHeart className={`text-2xl ${isFavorite ? 'text-red-600 fill-red-600' : 'text-gray-600'}`} />
              </span>

              <button 
                onClick={handleAddToBasket}
                disabled={product?.isOutOfStock || isInBasket}
                className={`flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm transition-all shadow-sm ${
                  product?.isOutOfStock
                    ? 'bg-white border-2 border-[#ea0b17] text-[#ea0b17] cursor-not-allowed'
                    : isInBasket
                      ? 'bg-white border-2 border-[#008000] text-[#008000] cursor-default'
                      : 'bg-[#0d0405] text-white hover:bg-gray-800 cursor-pointer'
                }`}
              >
                {!product?.isOutOfStock && !isInBasket && <AiOutlineShopping className="text-lg" />}
                {product?.isOutOfStock
                  ? "Stokda yoxdur"
                  : isInBasket
                    ? "Əlavə olundu"
                    : "Səbətə at"}
              </button>
            </div>
          </div>

          {product?.desc && (
            <div className="mt-4">
            <h3 className="font-semibold text-gray-900 mb-2">Məhsul haqqında</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              {product.desc}
            </p>
          </div>
          )}

        </div>

      </div>
    </div>
    </>
  )
}

export default Detail;