import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom"
import Home from './components/Home';
import Account from './components/Account'
import Appointment from './components/Appointment';

function App() {


  return (
      <BrowserRouter>
      <Switch>
        <Route exact path="/" components><Home/></Route>
        <Route exact path="/account" components><Account/></Route>
        <Route exact path="/appointment" components><Appointment/></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
