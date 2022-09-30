import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom"
import Home from './components/Home';
import Account from './components/Account'
import Login from './components/Login'
import Register from './components/Register';
import ProtectedRoute from './components/ProtectedRoute';
import {AuthProvider} from './context/authContext'
import Appointment from './components/Appointment'



function App() {


  return (
      <BrowserRouter>
        <AuthProvider>
      <Switch>
       <Route exact path= '/'><Home/></Route>
        <Route exact path="/account" components><Account/></Route>
        <Route path = '/login/' components><Login/></Route>
        <Route path = '/user/' components><Register/></Route>      
        <ProtectedRoute path= '/home'><Appointment/></ProtectedRoute>
      </Switch>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
