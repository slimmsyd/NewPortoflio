import logo from './logo.svg';
import './App.css';
import LandingPage from './pages/LandingPage';
import Navbar from './components/Navbar';
function App() {
  return (
    <div className = "main">
            <Navbar />
      <LandingPage />
    </div>
  );
}

export default App;
