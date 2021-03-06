import './App.css';
import Navbar from './Pages/Navbar';
import { Routes, Route, Link } from "react-router-dom";
import About from './Pages/About/About';
import Home from './Pages/Home/Home';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
