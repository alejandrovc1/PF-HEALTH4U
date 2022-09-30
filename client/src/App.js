import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom"
import AboutUs from './components/aboutUs.jsx'

function App() {


  return (
      <BrowserRouter>
      <Switch>
      <Route exact path="/aboutus" components> <AboutUs/> </Route>
      <Route  path="*" components> <h1>pagina no encontrada</h1> </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;