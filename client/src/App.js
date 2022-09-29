import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom"
import Home from './components/Home';
import Account from './components/Account'
import Login from './components/Login'
import Register from './components/Register';
import ProtectedRoute from './components/ProtectedRoute';
import {AuthProvider} from './context/authContext'

function App() {


  return (
      <BrowserRouter>
        <AuthProvider>
      <Switch>
       <ProtectedRoute path= '/'><Home/></ProtectedRoute>
        <Route exact path="/account" components><Account/></Route>
        <Route path = '/login/' components><Login/></Route>
        <Route path = '/register/' components><Register/></Route> 
        <Route path = 'appointment'><Appointment/></Route>
      </Switch>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
