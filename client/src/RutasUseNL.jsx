import React from "react";
import { Routes ,Route ,Navigate} from "react-router-dom";
import { Home } from './components/Home/index.js'
import { Login } from './components/Login/index.js'
import { Register } from './components/Register/index.js'
import AboutUs from './components/AboutUs/AboutUs.jsx'
import Nav from './components/Nav/Nav.jsx'
import Footer from './components/Footer/Footer.jsx'


export default function RutasUseNL(){

  return(
    <React.Fragment>
      <Nav/>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register/' element={<Register />} />
        <Route path='/aboutus' element={<AboutUs/>} />
        <Route path='*' element={<Navigate to='/'/>}/> 
      </Routes>
      <Footer/>
    </React.Fragment>
  )
}