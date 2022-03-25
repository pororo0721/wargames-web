
import { React } from 'react';
import "./App.css";
// Routing
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
// Components
import NavbarComp from './components/Navbar/NavbarComp';
import Footer from './components/Footer/Footer';

// Pages
import Home from './pages/Home/Home';





function App() {
  return (
    <div className="page-container">
      <div className= "content-wrap">
      
    <Router>
    <NavbarComp />
    <Switch>
      <Route exact path="/" component={Home} />
    </Switch>
    </Router>

    </div>
    <Footer />
    </div>
    
  );
}


export default App;
