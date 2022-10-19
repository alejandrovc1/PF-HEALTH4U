import React from 'react'
import './App.css'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux'
import AdminView from './components/admin/AdminView'
import { AuthProvider } from './context/authContext'
import { getRole } from './actions/index.js'
import Loading from './components/Loading/Loading.jsx'
import RutasUseNL from './RutasUseNL.jsx'
import RutasUseP from './RutasUseP'
import RutasUseD from './RutasUseD'
import { Nav } from './components/Nav'
import Footer from './components/Footer/Footer'


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
      <div className='App'>
        <Routes>
          {!tokenInLocal?
          <>
         <Route path='/*' element={<RutasUseNL/>} />
         <Route path='*' element={<Navigate to='/home'/>}/> 
          </>
          : role === 'doctor'?
          <>
          <Route path='/*' element={<RutasUseD id={id}/>} />
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
          : <Route path='*' element={
            <>
            <Nav/>
            <Loading/>
            <Footer/>
            </>
        }/>
          }
        </Routes>
      </div>
      </AuthProvider>
    </BrowserRouter>
  )
};

