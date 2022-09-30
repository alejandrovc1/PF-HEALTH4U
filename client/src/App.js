import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom"
<<<<<<< HEAD
import AboutUs from './components/aboutUs.jsx'

function App() {


  return (
      <BrowserRouter>
      <Switch>
      <Route exact path="/aboutus" components> <AboutUs/> </Route>
      <Route  path="*" components> <h1>pagina no encontrada</h1> </Route>
      </Switch>
=======
import Home from './components/Home';
import Account from './components/Account'
import Login from './components/Login'
import Register from './components/Register';
import ProtectedRoute from './components/ProtectedRoute';
import { AuthProvider } from './context/authContext'
import Appointment from './components/Appointment'

function App()
{


  return (
    <BrowserRouter>
      <AuthProvider>
        <Switch>
          <Route exact path='/'><Home /></Route>
          <Route exact path="/account" components><Account /></Route>
          <Route path='/login/' components><Login /></Route>
          <Route path='/register/' components><Register /></Route>
          <ProtectedRoute path='/appointment'><Appointment /></ProtectedRoute>
        </Switch>
      </AuthProvider>
>>>>>>> 7d256085c21e21b4445d17c7c85dfdb11d8dc007
    </BrowserRouter>
  );
}

export default App;