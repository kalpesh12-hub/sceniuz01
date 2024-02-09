import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Data_Analytics from './Components/Services/Data-Analytics/Data_Analytics';

function App() {
  return (
    <>
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about-us" element={<About/>}/>
        <Route path='/data-analytics' element={<Data_Analytics/>}/>
      </Routes>
    </Router>
    </>
  );
}

export default App;
