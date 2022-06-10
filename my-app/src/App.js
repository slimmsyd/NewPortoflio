import logo from './logo.svg';
import './App.css';
import LandingPage from './pages/LandingPage';
import Navbar from './components/Navbar';
import AnimatedRoutes from './components/AnimatedRoutes';
import {BrowserRouter as  Router, Link, Routes, Route, useLoaction} from 'react-router-dom';
import Work from './pages/works'; 
function App() {

  

  return (
    <Router>
      <Navbar />
     <AnimatedRoutes />
    </Router>
   
  );
}

export default App;
