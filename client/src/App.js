import React, { useState } from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from './components/Home';
import HomeDocLogged from './components/doctor/HomeDocLogged';
import Login from './components/Login'
import Register from './components/Register';
import ProfileDoctor from './components/doctor/ProfileDoctor';
import ProfilePatient from './components/patient/ProfilePatient';
import DoctorDetail from './components/patient/DoctorDetail';
import PrivateRoute from './components/PrivateRoute';
import Appointment from './components/patient/Appointment'
import AdminView from "./components/admin/AdminView";
import { MainRouter } from './routing/MainRouter';
import { AuthProvider } from './context/authContext'

import roles from "./helpers/roles"

export default function App() {
  return (
    <BrowserRouter>
      <AuthProvider>

        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/login/' element={<Login />} />
          <Route exact path='/register/' element={<Register />} />
          <Route exact path='/docDetail/:id' element={<DoctorDetail />} />

          <Route exact path='/profile/Doctor/:id'  element={<ProfileDoctor/>} />
          <Route exact path='/profile/Patient/:id'  element={<ProfilePatient/>} />
          <Route exact path='/appointment' element={<Appointment />}/>
          <Route exact path='/adminView//*' element={<AdminView />} />
          <Route exact path='/homeDoc' element= { <PrivateRoute hasRole={roles.doctor} element={<HomeDocLogged />} />} />

          {/* <Route exact path='/homeDoc' element= { <PrivateRoute hasRole={roles.doctor} element={<HomeDocLogged />} />} /> */}
          {/* <Route exact path='/adminView' element= { <PrivateRoute hasRole={roles.admin} element={<AdminView />} />} /> */}

          
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  )
};

//ROUTEO PROTEGIDO 
// export default function App() {
//   const [user, setUser] = useState(null)

//   const login = (user) => {
//     setUser(user)
//   }

//   return (
//     <AuthProvider>
//       <MainRouter />
//     </AuthProvider>
//   );
// }

// export default App

