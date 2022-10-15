import React from 'react'
import { useState } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
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
import { useDispatch, useSelector } from 'react-redux'
import { getRole } from './actions/index.js'


// const tokenInLocal = localStorage.getItem("token")
// if (tokenInLocal) {
//   const id = localStorage.getItem("id")
//   const role = await axios.get("http://localhost:3001/login", { id, token: tokenIn })
// }

export default function App({ user }) {
  const dispatch=useDispatch()
  const tokenInLocal = localStorage.getItem("token")
  const role=useSelector(f=>f.role)
  if(tokenInLocal){
    console.log(tokenInLocal)
    const id=localStorage.getItem("id")
    dispatch(getRole({id,token:tokenInLocal}))
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
          </>
          :role==='doctor'?
          <>
            <Route path='/' element={<h1>home doctor</h1>} />
            <Route path='/profile/Patient/:id' element={<ProfileDoctor />} />
          </>
          :role==='patient'?
          <>
            <Route path='/appointment' element={<Appointment  />} />
            <Route path='/profile/Patient/:id' element={<ProfilePatient />} />
            <Route path='*' element={<Navigate to='appointment'/>}/>  
          </>
          :role==='admin'?
          <Route path='/docDetail/:id' element={<AdminView/>} />
          :<Route path='*' element={<h1>limpiar localStorage y redireccionar</h1>}/>
        }
{/*          
          <Route element={<ProtectedRoute 
            isAllowed={!!user} />}>
            <Route path='/appointment' element={<Appointment />} />
            <Route path='/profile/Patient/:id' element={<ProfilePatient />} />
          </Route>

        
          <Route path='/profile/Doctor/:id' element={<ProfileDoctor />} />
          <Route path='/docDetail/:id' element={<DoctorDetail />} />

        
          <Route path='/adminView' element={
            <ProtectedRoute
              isAllowed={!!user && user.rol.includes('admin')}
              redirectTo="/login"
            >
              <AdminView />
            </ProtectedRoute>
          } /> */}

        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );

}


