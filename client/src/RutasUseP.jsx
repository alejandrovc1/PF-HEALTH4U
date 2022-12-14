import React from "react";
import { Routes ,Route ,Navigate} from "react-router-dom";
import { Home } from './components/Home/index.js'
import { Login } from './components/Login/index.js'
import { Register } from './components/Register/index.js'
import AboutUs from './components/AboutUs/AboutUs.jsx'
import Nav from './components/Nav/Nav.jsx'
import Footer from './components/Footer/Footer.jsx'
import { DoctorDetail } from './components/patient/DoctorDetail/index.js'
import { Appointment } from './components/patient/Appointment/index.js'
import ProfilePatient from './components/patient/ProfilePatient'
import NavAppointment from "./components/patient/NavAppointment/NavAppointment.jsx";
import Specialties from "./components/Specialties/Specialties.jsx";
import Subscribe from "./components/patient/Subscribe/Subscribe.jsx";

 

export default function RutasUseP({id,role}){

    return(
        <React.Fragment>
        <NavAppointment />
        <Routes>
        <Route exact path='/' element={<Home id={id} />} />
        <Route  path='/aboutus' element={<AboutUs role={role}/>}  />
        <Route path='/specialties' element={<Specialties/>}/>
        <Route path='/subscription' element={<Subscribe id={id}/>}/>
        <Route path='/appointment' element={<Appointment  />} />
        <Route path='/profile' element={<ProfilePatient id={id}/>} />
        <Route exact path='/docDetail/:id' element={<DoctorDetail />} />
        <Route path='*' element={<Navigate to='/'/>}/> 

        </Routes>
        <Footer/>
      </React.Fragment>
    )
}