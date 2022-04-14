import { React } from 'react';
import "./App.css";
// Routing
import { BrowserRouter as Router} from "react-router-dom";


// Pages
import Home from './pages';



function App() {
  return (
 
  <Router>
    <Home />
  </Router>


    
  );
}


export default App;
