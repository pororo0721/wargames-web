import { React } from 'react';
import "./App.css";
// Routing
import { BrowserRouter as Router} from "react-router-dom";
// Components
import Navbar from './components/Navbar';
// Pages



function App() {
  return (
 
  <Router>
        <Navbar />
  </Router>


    
  );
}


export default App;
