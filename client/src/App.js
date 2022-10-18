import React from 'react'
import { useState } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux'
import { Home } from './components/Home/index.js'
import { Login } from './components/Login/index.js'
import { Register } from './components/Register/index.js'
import { DoctorDetail } from './components/patient/DoctorDetail/index.js'
import { Appointment } from './components/patient/Appointment/index.js'
import AdminView from './components/admin/AdminView'
import ProfilePatient from './components/patient/ProfilePatient'
import ProfileDoctor from './components/doctor/ProfileDoctor'
import { ProtectedRoute } from './components/ProtectedRoute/ProtectedRoute'
import { AuthProvider } from './context/authContext'
import { getRole } from './actions/index.js'
import AboutUs from './components/AboutUs/AboutUs.jsx'


// const tokenInLocal = localStorage.getItem("token")
// if (tokenInLocal) {
//   const id = localStorage.getItem("id")
//   const role = await axios.get("http://localhost:3001/login", { id, token: tokenIn })
// }

export default function App( ) {

  const dispatch = useDispatch()
  const tokenInLocal = localStorage.getItem("token")
  const role = useSelector( f => f.role)
  if(tokenInLocal){
    const id = localStorage.getItem("id")
    dispatch(getRole({id, token:tokenInLocal}))
  }


  return (
    <BrowserRouter>
      <AuthProvider>

        <Routes>
          {!tokenInLocal?
          <>
            <Route exact path='/' element={<Home />} />
            <Route exact path='/login' element={<Login />} />
            <Route exact path='/register/' element={<Register />} />
            <Route exact path='/docDetail/:id' element={<DoctorDetail />} />
            <Route exact path='/aboutus' element={<AboutUs/>} />
            <Route path='*' element={<Navigate to='/'/>}/> 
          </>
          : role === 'doctor'?
          <>
            <Route path='/' element={<h1>home doctor</h1>} />
            <Route path='/profile/:id' element={<ProfileDoctor />} />
            <Route path='*' element={<Navigate to='/'/>}/> 
          </>
          : role === 'patient'?
          <>
            <Route path='/appointment' element={<Appointment  />} />
            <Route path='/profile/:id' element={<ProfilePatient />} />
            <Route exact path='/docDetail/:id' element={<DoctorDetail />} />
            <Route path='*' element={<Navigate to='appointment'/>}/> 
          </>
          :role ==='admin'?
          <>
            <Route path='/adminView//*' element={<AdminView/>} />
            <Route path='*' element={<Navigate to='/adminView'/>}/> 
          </>
          : <Route path='*' element={<h1>Loading...</h1>}/>
          }
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  )
};

