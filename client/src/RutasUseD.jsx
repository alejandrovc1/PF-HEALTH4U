import React from "react";
import { Routes, Route, Navigate} from "react-router-dom";
// import { Home } from './components/Home/index.js'
// import { Login } from './components/Login/index.js'
// import { Register } from './components/Register/index.js'
// import { DoctorDetail } from './components/patient/DoctorDetail/index.js'
// import { Appointment } from './components/patient/Appointment/index.js'
// import ProfilePatient from './components/patient/ProfilePatient'
// import NavAppointment from "./components/patient/NavAppointment/NavAppointment.jsx";
// import Specialties from "./components/Specialties/Specialties.jsx";
// import Subscribe from "./components/patient/Subscribe/Subscribe.jsx";
import AboutUs from './components/AboutUs/AboutUs.jsx'
import Footer from './components/Footer/Footer.jsx'
import NavDoctorLogged from "./components/doctor/NavDoctorLogged/NavDoctorLogged.jsx";
import ProfileDoctor from "./components/doctor/ProfileDoctor.jsx";
import HomeDocLogged from "./components/doctor/HomeDocLogged/HomeDocLogged.jsx";
import Querys from "./components/doctor/Querys/Quierys.jsx";


export default function RutasUseD({id,role}){
    return(
        <React.Fragment>
        <NavDoctorLogged/>
        <Routes>
          <Route exact path='/' element={<HomeDocLogged/>} />
          <Route path='/aboutus' element={<AboutUs role={role}/>} />
          <Route path='/myqueries' element={<Querys id={id} />}/>
          <Route path='/profile' element={<ProfileDoctor id={id}/>} />
          <Route path='*' element={<Navigate to='/'/>}/> 
        </Routes>
        <Footer/>
      </React.Fragment>
    )
}