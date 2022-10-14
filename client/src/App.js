import React from 'react'
import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Admin, Resource, UserMenu } from "react-admin"
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


// const tokenInLocal = localStorage.getItem("token")
// if (tokenInLocal) {
//   const id = localStorage.getItem("id")
//   const role = await axios.get("http://localhost:3001/login", { id, token: tokenIn })
// }

export default function App({ user }) {
  return (
    <BrowserRouter>
      <AuthProvider>

        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/login/' element={<Login />} />
          <Route exact path='/register/' element={<Register />} />
          <Route exact path='/docDetail/:id' element={<DoctorDetail />} />
          
          {/* RUTAS PROTEGIDAS*/}
          {/* RUTAS PACIENTE */}
          {/* !!user significa que si el usuario existe es true sino false */}
          <Route element={<ProtectedRoute 
            isAllowed={!!user} />}>
            <Route path='/appointment' element={<Appointment />} />
            <Route path='/profile/Patient/:id' element={<ProfilePatient />} />
          </Route>

          {/* RUTAS DOCTOR */}
          <Route path='/profile/Doctor/:id' element={<ProfileDoctor />} />
          <Route path='/docDetail/:id' element={<DoctorDetail />} />

          {/* RUTAS ADMIN */}
          {/* Es allowed si primero existe un usuario  */}
          <Route path='/adminView' element={
            <ProtectedRoute
              isAllowed={!!user && user.rol.includes('admin')}
              redirectTo="/login"
            >
              <AdminView />
            </ProtectedRoute>
          } />

        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );

}


