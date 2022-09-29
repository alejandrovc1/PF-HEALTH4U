import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom"
import Home from './components/Home';
import Profile from './components/Profile'

function App() {


  return (
      <BrowserRouter>
      <Switch>
        <Route exact path="/home" components><Home/></Route>
        <Route exact path="/profile" components><Profile/></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
