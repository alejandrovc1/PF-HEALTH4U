import React, { useEffect } from "react";
import { Routes ,Route ,Navigate} from "react-router-dom";
import { Home } from './components/Home/index.js'
import { Login } from './components/Login/index.js'
import { Register } from './components/Register/index.js'
import AboutUs from './components/AboutUs/AboutUs.jsx'
import Nav from './components/Nav/Nav.jsx'
import Footer from './components/Footer/Footer.jsx'
import { useDispatch, useSelector } from "react-redux";
import Error from "./components/Error/Error.jsx";


export default function RutasUseNL(){
  
    return(
        <React.Fragment>
        <Nav/>
        <Error />
        <Routes>
        <Route exact path='/' element={<Home />} />
        <Route  path='/login' element={<Login />} />
        <Route  path='/register/' element={<Register />} />
        <Route  path='/aboutus' element={<AboutUs/>} />
        <Route path='*' element={<Navigate to='/'/>}/> 
        </Routes>
        <Footer/>
      </React.Fragment>
    )
}