import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom"
import './App.css';
import ECommerce from './Components/Ecommerce';
import Navbar from './Components/Navbar';
import Home from './Components/Pages/Home';
import Speaciliest from './Components/Pages/News';
import OurServices from './Components/Pages/OurServices';
import Product from './Components/Product';

const App = () => {
   return (

    <>
     <BrowserRouter>
     <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/services" element={<OurServices/>} />
        <Route path="/speaciliest" element={<Speaciliest/>} />
        <Route path="/ecom" element={<ECommerce/>}/>
        <Route path='/product' element={<Product/>}/>
      </Routes>
     </BrowserRouter>
    </>
  );
}

export default App;

