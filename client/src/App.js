import React from 'react'
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Admin, Resource } from "react-admin"
import Home from './components/Home';
import HomeDocLogged from './components/doctor/HomeDocLogged';
import Login from './components/Login'
import Register from './components/Register';
import DoctorDetail from './components/patient/DoctorDetail';
import PrivateRoute from './components/PrivateRoute';
import Appointment from './components/patient/Appointment'


import AdminView from "./components/admin/AdminView";
import roles from "./helpers/roles"

import { AuthProvider } from './context/authContext'
import Profile from './components/Profile';

// import roles from './helpers/roles';
// import AdminView from './components/AdminView';


export default function App() {

  return (
    <BrowserRouter>
      <AuthProvider>

        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/login/' element={<Login />} />
          <Route exact path='/register/' element={<Register />} />
          <Route exact path='/docDetail/:id' element={<DoctorDetail />} />
          <Route exact path='/profile/:name'  element={<Profile/>} />

          <Route exact path='/adminView' element={<AdminView />} />

          {/* <Route exact path='/appointment' element= { <PrivateRoute element={<Appointment />} />} /> */}
          {/* <Route exact path='/homeDoc' element= { <PrivateRoute hasRole={roles.doctor} element={<HomeDocLogged />} />} /> */}
          {/* <Route exact path='/adminView' element= { <PrivateRoute hasRole={roles.admin} element={<AdminView />} />} /> */}
          
          
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}