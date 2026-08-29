import React, { useState, useEffect, useContext } from 'react'
import Logo from '/src/assets/logo.svg'
import { CiSearch } from "react-icons/ci";
import { FaAward } from "react-icons/fa";
import { HiBars3 } from "react-icons/hi2";
import { BiUser } from "react-icons/bi";
import { GoHeart } from "react-icons/go";
import { AiOutlineShopping, AiOutlineClose } from "react-icons/ai";
import { Link } from 'react-router';
import { RiFacebookCircleLine, RiInstagramLine, RiTiktokFill, RiYoutubeLine } from 'react-icons/ri';
import { BASKET } from '../context/BasketContext';
import { DATA } from '../context/DataContext';
import Search from '../Search';
import MobileSearchModal from '../MobileSearchModal';
import { LuBadgePercent } from 'react-icons/lu';

function Header() {
  const [menu, setMenu] = useState(false)
  const [isFixed, setIsFixed] = useState(false)
  const [isMobileSearchOpen, setIsMobileSearchOpen] = useState(false)
  const [activeCategory, setActiveCategory] = useState(null);

  const { sebet } = useContext(BASKET)
  const { axtar, category } = useContext(DATA)

  const totalItemsCount = sebet?.reduce((sum, item) => sum + (item.quantity || 1), 0) || 0;

  const categoriesList = category?.categories || category || [];

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768 && axtar && axtar.trim() !== '') {
        setIsMobileSearchOpen(true);
      } else if (window.innerWidth >= 768) {
        setIsMobileSearchOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [axtar]);

  useEffect(() => {
    if (menu) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [menu]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 150) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleCategoryClick = (categoryName) => {
    localStorage.setItem("selectedCategory", categoryName);
    localStorage.removeItem("selectedSubCategory");
    localStorage.removeItem("subProductIds");
    window.dispatchEvent(new Event("filterUpdated"));
    setActiveCategory(null);
  };

  const activeData = categoriesList.find(cat => cat.name === activeCategory);

  return (
    <>
      <header className="relative">
        
        {/* Ən yuxarı qırmızı zolaq (Desktop) */}
        <div className="bg-[#ea0b17] hidden md:block">
          <div className="text-white max-w-6xl mx-auto py-1 px-3">
            <div className="flex justify-between">
              <ul className="flex items-center gap-5 text-sm font-semibold">
                <Link to='/brendler' className='hover:text-[#f5858b] duration-300 cursor-pointer'>Brendlər</Link>
                <Link to='/filiallar' className='hover:text-[#f5858b] duration-300 cursor-pointer'>Filiallar</Link>
                <Link to='/haqqimizda' className='hover:text-[#f5858b] duration-300 cursor-pointer'>Haqqımızda</Link>
                <Link to='/bloq' className='hover:text-[#f5858b] duration-300 cursor-pointer'>Bloq</Link>
                <Link to='/elaqe' className='hover:text-[#f5858b] duration-300 cursor-pointer'>Əlaqə</Link>
              </ul>
            </div>
          </div>
        </div>

        {/* Logo, Desktop Search və İstifadəçi ikonları */}
        <div className="hidden md:block max-w-6xl mx-auto py-3 px-3">
          <div className='flex justify-between items-center gap-3'>
            <Link to='/index'><img className='w-28 xl:w-40 cursor-pointer' src={Logo} alt="logo" /></Link>
            
            <Search />

            <div className='flex items-center gap-4 font-semibold'>
              <ul className='flex items-center gap-4'>
                <Link to='/kampaniyalar' className='flex items-center gap-2 text-[#ea0b17] hover:text-[#f4858b] duration-300 text-[15px] lg:text-[16px] xl:text-[17px] cursor-pointer'><LuBadgePercent className='text-xl xl:text-2xl' />Kampaniyalar</Link>
              </ul>
              <Link to='/daxilol'><BiUser className='text-xl xl:text-2xl text-[#5e5e5e] cursor-pointer' /></Link>
              <Link to='/sevimliler'><GoHeart className='text-xl xl:text-2xl text-[#5e5e5e] cursor-pointer' /></Link>
              <Link to='/sebet' className='relative'>
                <AiOutlineShopping className='text-xl xl:text-2xl text-[#5e5e5e] cursor-pointer' />
                {totalItemsCount === 0 ? '' : <span className='absolute border rounded-[50%] w-5 h-5 flex items-center justify-center -top-2 left-3 text-[11px] bg-[#ea0b17] text-white'>{totalItemsCount}</span>}
              </Link>
            </div>
          </div>
        </div>

        {/* Kateqoriya menyusu (Çəhrayı yer) və aşağı açılan ağ dropdown */}
        <div 
          className={`hidden md:block transition-all duration-300 bg-[#fbeaea] ${isFixed ? 'fixed top-0 left-0 w-full z-50 shadow-md py-2' : 'relative'}`}
          onMouseLeave={() => setActiveCategory(null)}
        >
          <div className='max-w-6xl mx-auto px-3 flex items-center justify-between gap-4'>
            <ul className='flex items-center justify-between text-center py-3 w-full'>
              {categoriesList && categoriesList.length > 0 && (
                categoriesList.map((cat, index) => (
                  <Link 
                    key={index}
                    to='/mehsullar' 
                    onMouseEnter={() => setActiveCategory(cat.name)}
                    onClick={() => handleCategoryClick(cat.name)} 
                    className={`border transition-all duration-300 py-1 px-2 rounded-3xl text-[11px] lg:text-[13px] xl:text-[15px] font-semibold cursor-pointer ${
                      activeCategory === cat.name 
                        ? 'border-[#ea0b17] bg-[#ea0b17] text-white' 
                        : 'border-transparent text-black hover:border-[#ea0b17] hover:bg-[#ea0b17] hover:text-white'
                    }`}
                  >
                    {cat.name}
                  </Link>
                ))
              )}
            </ul>
            
            {isFixed && (
              <Link to='/sebet' className='relative shrink-0 flex items-center ml-2'>
                <AiOutlineShopping className='text-2xl text-[#5e5e5e] cursor-pointer' />
                {totalItemsCount === 0 ? '' : (
                  <span className='absolute border rounded-[50%] w-5 h-5 flex items-center justify-center -top-2 left-3 text-[11px] bg-[#ea0b17] text-white'>
                    {totalItemsCount}
                  </span>
                )}
              </Link>
            )}
          </div>

          {/* Ekrani tam tutan aşağı açılan ağ menyu (Subcategories) */}
          {activeData && (
            <div 
              className="absolute top-full left-0 w-full bg-white shadow-2xl border-t border-gray-100 py-8 px-6 z-50 transition-all duration-300 box-border overflow-hidden"
              onMouseEnter={() => setActiveCategory(activeData.name)}
              onMouseLeave={() => setActiveCategory(null)}
            >
              <div className="max-w-6xl mx-auto px-3">
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                  {activeData.subcategories?.map((sub, subIdx) => (
                    <Link 
                      key={subIdx}
                      to='/mehsullar' 
                      onClick={() => {
                        localStorage.setItem("selectedCategory", activeData.name);
                        localStorage.setItem("selectedSubCategory", sub.name);
                        localStorage.setItem("subProductIds", JSON.stringify(sub.productIds));
                        window.dispatchEvent(new Event("filterUpdated"));
                        setActiveCategory(null);
                      }}
                      className="p-3 rounded-lg bg-gray-50 hover:bg-[#fbeaea] text-black font-medium transition-all duration-200 text-sm flex items-center justify-between group cursor-pointer border border-transparent"
                    >
                      <span>{sub.name}</span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Mobil Header */}
        <div className='md:hidden flex justify-between items-center py-5 px-3 bg-white relative z-50'>
          <button onClick={() => setIsMobileSearchOpen(true)} className='cursor-pointer shrink-0'>
            <CiSearch className='text-4xl text-[#5e5e5e]' />
          </button>
          <Link to='/index'><img src={Logo} alt="logo" /></Link>
          <div onClick={() => setMenu(menu => !menu)} className='cursor-pointer shrink-0'>
            {menu ? (
              <AiOutlineClose className='text-4xl text-[#5e5e5e]' />
            ) : (
              <HiBars3 className='text-4xl text-[#5e5e5e]' />
            )}
          </div>
        </div>
        <hr className='md:hidden flex border text-[#eae1e1]' />

        {/* Menubar (Mobil açılan menyu) */}
        <div className={`md:hidden fixed inset-x-0 bottom-0 top-[77px] bg-white z-40 flex flex-col gap-5 py-6 px-4 overflow-y-auto transition-all duration-300 ease-in-out ${menu ? 'translate-x-0' : 'translate-x-full'}`}>
          <ul className='flex flex-col gap-3'>
            <Link to='/haqqimizda' onClick={() => setMenu(false)} className='text-2xl hover:text-[#ea0b17] duration-300 cursor-pointer'>Haqqımızda</Link>
            <Link to='/bloq' onClick={() => setMenu(false)} className='text-2xl hover:text-[#ea0b17] duration-300 cursor-pointer'>Bloq</Link>
            <Link to='/brendler' onClick={() => setMenu(false)} className='text-2xl hover:text-[#ea0b17] duration-300 cursor-pointer'>Brendlər</Link>
            <Link to='/filiallar' onClick={() => setMenu(false)} className='text-2xl hover:text-[#ea0b17] duration-300 cursor-pointer'>Filiallar</Link>
            <Link to='/elaqe' onClick={() => setMenu(false)} className='text-2xl hover:text-[#ea0b17] duration-300 cursor-pointer'>Əlaqə</Link>
          </ul>
          <hr className='text-[#ededed]' />
          <ul className='flex flex-col gap-3'>
            <Link to='/kampaniyalar' onClick={() => setMenu(false)} className='flex items-center gap-2 text-2xl hover:text-[#ea0b17] duration-300 cursor-pointer'><FaAward className='text-2xl text-[#ea0b17]' />Kampaniyalar</Link>
            <Link to='/daxilol' onClick={() => setMenu(false)} className='flex items-center gap-2 text-2xl hover:text-[#ea0b17] duration-300 cursor-pointer'><BiUser className='text-2xl text-[#5e5e5e]' />Daxil ol</Link>
            <Link to='/sevimliler' onClick={() => setMenu(false)} className='flex items-center gap-2 text-2xl hover:text-[#ea0b17] duration-300 cursor-pointer'><GoHeart className='text-2xl text-[#5e5e5e]' />Favoritlər</Link>
            <Link to='/sebet' onClick={() => setMenu(false)} className='flex items-center gap-2 text-2xl hover:text-[#ea0b17] duration-300 cursor-pointer'><AiOutlineShopping className='text-2xl text-[#5e5e5e]' />Səbət</Link>
          </ul>
          <hr className='text-[#ededed]' />
          <div className='flex gap-3'>
            <a href='https://www.instagram.com/baharstore.az' target='_blank' rel="noopener noreferrer" className='shrink-0 border-2 border-[#eee] hover:border-[#ea0b17] hover:bg-[#ea0b17] hover:text-white duration-300 cursor-pointer flex items-center justify-center w-12 h-12 rounded-full p-1'><RiInstagramLine className='text-xl' /></a>
            <a href='https://www.facebook.com/Baharstore' target='_blank' rel="noopener noreferrer" className='shrink-0 border-2 border-[#eee] hover:border-[#ea0b17] hover:bg-[#ea0b17] hover:text-white duration-300 cursor-pointer flex items-center justify-center w-12 h-12 rounded-full p-1'><RiFacebookCircleLine className='text-xl' /></a>
            <a href='https://www.tiktok.com/@baharstore.az' target='_blank' rel="noopener noreferrer" className='shrink-0 border-2 border-[#eee] hover:border-[#ea0b17] hover:bg-[#ea0b17] hover:text-white duration-300 cursor-pointer flex items-center justify-center w-12 h-12 rounded-full p-1'><RiTiktokFill className='text-xl' /></a>
            <a href='https://www.youtube.com/@Baharstore.az2017' target='_blank' rel="noopener noreferrer" className='shrink-0 border-2 border-[#eee] hover:border-[#ea0b17] hover:bg-[#ea0b17] hover:text-white duration-300 cursor-pointer flex items-center justify-center w-12 h-12 rounded-full p-1'><RiYoutubeLine className='text-xl' /></a>
          </div>
        </div>
        
        <MobileSearchModal
          isOpen={isMobileSearchOpen} 
          onClose={() => setIsMobileSearchOpen(false)} 
        />

      </header>
    </>
  );
}

export default Header;