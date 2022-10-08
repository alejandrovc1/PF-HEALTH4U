import React from 'react'
import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom"
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
// import roles from './helpers/roles';
// import AdminView from './components/AdminView';


export default function App() {

  return (
    <BrowserRouter>
      <AuthProvider>
        <Switch>
          <Route exact path='/'><Home/></Route>
          <Route exact path='/login/'><Login/></Route>
          <Route exact path='/register/'><Register/></Route>
          <Route exact path='/docDetail/:id'><DoctorDetail /></Route>

          <PrivateRoute exact path='/appointment'><Appointment/></PrivateRoute>
          <PrivateRoute hasRole={roles.doctor} exact path='/homeDoc'><HomeDocLogged/></PrivateRoute>
          <PrivateRoute hasRole={roles.admin} exact path='/adminView'><AdminView/></PrivateRoute>
          
          {/* <Route exact path='/appointment'><Appointment/></Route> */}

        </Switch>
      </AuthProvider>
    </BrowserRouter>
  );
}

// export default App