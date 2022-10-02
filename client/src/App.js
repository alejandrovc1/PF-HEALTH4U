import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom"
import Home from './components/Home';
import Account from './components/Account'
import HomeDocLogged from './components/HomeDocLogged';
import Login from './components/Login'
import Register from './components/Register';
import DoctorDetail from './components/DoctorDetail';
import ProtectedRoute from './components/ProtectedRoute';
import { AuthProvider } from './context/authContext'
import Appointment from './components/Appointment'
import roles from './helpers/roles';



function App()
{


  return (
    <BrowserRouter>
      <AuthProvider>
        <Switch>
          <Route exact path='/'><Home /></Route>
          <Route exact path='/homeDoc'><HomeDocLogged /></Route>
          <Route exact path="/account" components><Account /></Route>
          <Route exact path='/login/' components><Login /></Route>
          <Route exact path='/register/' components><Register /></Route>
          <Route exact path='/docDetail/:id' components><DoctorDetail /></Route>

          {/* <Route exact path='/appointment' components><Appointment /></Route> */}
          <ProtectedRoute exact path='/appointment'><Appointment /></ProtectedRoute>
        </Switch>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
