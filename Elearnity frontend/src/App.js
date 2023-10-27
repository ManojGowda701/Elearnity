import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Categories from './Components/Categories/Categories';
import MyProfile from './Components/Profile/MyProfile';
import LoginSignup from './Components/LoginSignup/LoginSignup';
import Science from './Components/Science/Science';
import Technology from './Components/Technology/Technology';
import Humanities from './Components/Humanities/Humanities';
import Architecture from './Components/Architecture/Architecture';
import Medical from './Components/Medical/Medical';
import Philosophy from './Components/Philosophy/Philosophy';
import Business from './Components/Business/Business';
import Law from './Components/Law/Law';


function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/categories/*" element={<Categories />} />
          <Route path="/categories/science" element={<Science />} />
          <Route path="/categories/technology" element={<Technology />} />
          <Route path="/categories/humanities" element={<Humanities />} />
          <Route path="/categories/architecture" element={<Architecture />} />
          <Route path="/categories/medical" element={<Medical />} />
          <Route path="/categories/philosophy" element={<Philosophy />} />
          <Route path="/categories/business" element={<Business />} />
          <Route path="/categories/law" element={<Law />} />
          <Route path="/myprofile" element={<MyProfile />} />
          <Route path="/loginsignup" element={<LoginSignup />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
