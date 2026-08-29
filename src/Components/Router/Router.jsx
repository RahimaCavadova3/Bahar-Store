import React from 'react'
import { Route, Routes } from 'react-router'
import Layout from '../layout/Layout'
import Index from '../pages/Index'
import Brends from '../pages/Brends'
import Branch from '../pages/Branch'
import About from '../pages/About'
import Blog from '../pages/Blog'
import Contact from '../pages/Contact'
import Login from '../pages/Login'
import Products from '../pages/Products'
import Favorites from '../pages/Favorites'
import Basket from '../pages/Basket'
import Forgotpassword from '../pages/Forgotpassword'
import Faq from '../pages/Faq'
import Loyalty from '../pages/Loyalty'
import Payment from '../pages/Payment'
import Privacy from '../pages/Privacy'
import Shipping from '../pages/Shipping'
import Connection from '../pages/Connection'
import Campaigns from '../pages/Campaigns'
import Detail from '../pages/Detail'
import Error from '../pages/Error'

function Router() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<Index/>}/>
          <Route path='/brendler' element={<Brends/>}/>
          <Route path='/filiallar' element={<Branch/>}/>
          <Route path='/haqqimizda' element={<About/>}/>
          <Route path='/bloq' element={<Blog/>}/>
          

          <Route path='/elaqe' element={<Contact/>}>
            <Route index element={<Connection/>} /> 
            <Route path='faq' element={<Faq/>}/>
            <Route path='loyalliq' element={<Loyalty/>}/>
            <Route path='odenis' element={<Payment/>}/>
            <Route path='gizlilik' element={<Privacy/>}/>
            <Route path='catdirilma' element={<Shipping/>}/>
          </Route>
          

          <Route path='/index' element={<Index/>}/>
          <Route path='/mehsullar' element={<Products/>}/>
          <Route path='/kampaniyalar' element={<Campaigns/>}/>
          <Route path='/sevimliler' element={<Favorites/>}/>
          <Route path='/sebet' element={<Basket/>}/>
          <Route path='/daxilol' element={<Login/>}/>
          <Route path='/sifremiunutdum' element={<Forgotpassword/>}/>
          <Route path='/mehsul/:slug' element={<Detail/>}/>
          <Route path='*' element={<Error/>}/>
        </Route>
      </Routes>
    </>
  )
}

export default Router