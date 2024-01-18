import Header from './content/Header';
import Footer from './content/Footer';
import Product from './Pages/Product';
import Shop  from './Pages/Shop';
import {BrowserRouter,Routes,Route } from 'react-router-dom';
import ShopCategory from './Pages/ShopCategory';
import Cart from './Pages/Cart';
import React from 'react';
import GoToTop from './content/GoToTop/GoToTop';
import Navbar from './content/Navbar/Navbar';
import Men from './Pages/Men';
import AboutUs from './content/AboutUs/AboutUs';
import Contact from './content/Contact/Contact';
const App=() =>{
  // const [cart,setCart]=useState([]);
  return (
   <>
   
   {/* <Header/> */}
   <Navbar/>
  
  <BrowserRouter>
 

  <Routes>
    <Route path='/' element={<Shop/>}/>
    <Route path='/AboutUs' element={<AboutUs/>}/>
    <Route path='/Contact' element={<Contact/>}/>
    <Route path='/T-Shirt' element={<ShopCategory category="T-shirt"/>}/>
    <Route path='/Hoodie' element={<ShopCategory category="Hoodie"/>}/>
    <Route path='/Jacket' element={<ShopCategory category="Jacket"/>}/>
    <Route path='/Cap' element={<ShopCategory category="Cap"/>}/>
    {/* <Route path='/Men' element={<Men />}/> */}

    <Route path='/product' element={<Product/>}>
      <Route path=":productId" element={<Product/>}/>
    </Route>
     <Route path='/cart' element={<Cart/>}/>
    </Routes>
  </BrowserRouter>
    <GoToTop/>
    <br/>
  {/* <Client/> */}
  <Footer/>

   </>
  );
}

export default App;
