import React from 'react'
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
import HelpUsImprove from './components/HelpUsImprove/HelpUsImprove'


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
            <Route path='/helpusimprove' element={<HelpUsImprove/>}/>
          </>
          : role === 'doctor'?
          <>
          
            <Route path='/' element={<h1>home doctor</h1>} />
            <Route path='/profile' element={<ProfileDoctor id={id} />} />
            <Route path='*' element={<Navigate to='/'/>}/> 
          </>
          : role === 'patient'?
          <>
            <Route path='/*' element={<RutasUseP id={id}/>} />
            <Route path='*' element={<Navigate to='/'/>}/>
          </>
          : role ==='admin'?
          <>
            <Route path='/adminView//*' element={<AdminView/>} />
            <Route exact path='/' element={<RutasUseNL />} />
            <Route path='*' element={<Navigate to='/adminView/'/>}/> 
          </>
          : <Route path='*' element={<Loading/>}/>
          }
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  )
};

