import React from 'react'
import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Admin, Resource, UserMenu } from "react-admin"
import { Home } from './components/Home'
import { Login } from './components/Login'
import { Register } from './components/Register'
import { DoctorDetail } from './components/patient/DoctorDetail'
import { Appointment } from './components/patient/Appointment'
import AdminView from './components/admin/AdminView'
import ProfilePatient from './components/patient/ProfilePatient'
import ProfileDoctor from './components/doctor/ProfileDoctor'
import { ProtectedRoute } from './components/ProtectedRoute/ProtectedRoute'
import axios from 'axios'

import { AuthProvider } from './context/authContext'

const roleF = async () => {
  const tokenInLocal = localStorage.getItem("token")
  let role;
  if (tokenInLocal) {
    const id = localStorage.getItem("id")
    role = await axios.get("http://localhost:3001/login", { id, token: tokenInLocal })
  }
  return role
}
// import AdminView from './components/AdminView';

export default function App(roleF) {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          {!tokenInLocal ? <>
            {/* RUTAS PUBLICAS */}
            <Route path='/' element={<Home />} />
            <Route path='*' element={<>NOT FOUND</>} />
            <Route path='/login/' element={<Login />} />
            <Route path='/register/' element={<Register />} />
          </>
            :
            role.data.foundRole === 'doctor' ? <>
              {/* RUTAS DOCTOR */}
              <Route path='/' element={<h1>Componente prueba</h1>} />
              <Route path='/profile/Doctor/:id' element={<ProfileDoctor />} />
              <Route path='/docDetail/:id' element={<DoctorDetail />} />
            </>
              :
              role.data.foundRole === 'patient' ? <>
                {/* RUTAS DOCTOR */}
                <Route path='/profile/Doctor/:id' element={<ProfileDoctor />} />
                <Route path='/docDetail/:id' element={<DoctorDetail />} />
              </> : <h1>Error</h1>}
        </Routes>

      </AuthProvider>
    </BrowserRouter>
  );
}

//  {/* RUTAS PROTEGIDAS*/}
//           {/* RUTAS PACIENTE */}
//           {/* !!user significa que si el usuario existe es true sino false */}
//           <Route element={<ProtectedRoute/>}>
//             <Route path='/appointment' element={<Appointment />} />
//             <Route path='/profile/Patient/:id' element={<ProfilePatient />} />
//           </Route>

//           {/* RUTAS DOCTOR */}
//           <Route path='/profile/Doctor/:id' element={<ProfileDoctor />} />
//           <Route path='/docDetail/:id' element={<DoctorDetail />} />

//           {/* RUTAS ADMIN */}
//           {/* Es allowed si primero existe un usuario  */}
//           <Route path='/adminView' element={
//             <ProtectedRoute
//               redirectTo="/login"
//             >
//               <AdminView />
//             </ProtectedRoute>
//           } />

//         </Routes>


