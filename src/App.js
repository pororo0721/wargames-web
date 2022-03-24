
import { React } from 'react';
// Routing
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
// Components
import NavbarComp from './components/NavbarComp';
import Footer from './components/Footer';
// Routes




function App() {
  return (
    <Router>
    <NavbarComp />
    <Switch>

    </Switch>
    <Footer/>
    </Router>
  )
}


export default App;
