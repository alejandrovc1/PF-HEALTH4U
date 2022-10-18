import React from 'react'
import { useState } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux'
import AdminView from './components/admin/AdminView'
import ProfileDoctor from './components/doctor/ProfileDoctor'
import { ProtectedRoute } from './components/ProtectedRoute/ProtectedRoute'
import { AuthProvider } from './context/authContext'
import { getRole } from './actions/index.js'
import Loading from './components/Loading/Loading.jsx'
import RutasUseNL from './RutasUseNL.jsx'
import RutasUseP from './RutasUseP'


// const tokenInLocal = localStorage.getItem("token")
// if (tokenInLocal) {
//   const id = localStorage.getItem("id")
//   const role = await axios.get("http://localhost:3001/login", { id, token: tokenIn })
// }

export default function App( ) {

  const dispatch = useDispatch()
  const tokenInLocal = localStorage.getItem("token")
  const role = useSelector( f => f.role)
  const id = localStorage.getItem("id")
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
         <Route path='/*' element={<RutasUseNL/>} />
         <Route path='*' element={<Navigate to='/home'/>}/> 
          </>
          : role === 'doctor'?
          <>
          
            <Route path='/' element={<h1>home doctor</h1>} />
            <Route path='/profile' element={<ProfileDoctor id={id} />} />
            <Route path='*' element={<Navigate to='/'/>}/> 
          </>
          : role === 'patient'?
          <>
            <Route path='/appointment' element={<Appointment  />} />
            <Route path='/profile/:id' element={<ProfilePatient />} />
            <Route exact path='/docDetail/:id' element={<DoctorDetail />} />
            <Route path='*' element={<Navigate to='appointment'/>}/> 
            <Route path='/*' element={<RutasUseP id={id}/>} />

          </>
          :role ==='admin'?
          <>
            <Route path='/adminView//*' element={<AdminView/>} />
            <Route path='*' element={<Navigate to='/adminView'/>}/> 
          </>
          : <Route path='*' element={<Loading/>}/>
          }
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  )
};

