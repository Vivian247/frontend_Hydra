import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Importing of Pages
import Home from "./pages/home";
import Contact from './pages/contact';
import Header from "./components/header";
import Footer from "./components/footer";


// Importing of CSS
import "./styles/HomePage.css";
import "./styles/contact.css";


// Importing of components
import WaterLog from './components/WaterLog/waterLog';
import User from './components/User/User';
import Testimonies from './components/Testimony/testimony';   
import Reminder from './components/Reminder/reminder';
import ProgressReport from './components/ProgressReport/progressReport';

// Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "@fortawesome/fontawesome-free/js/all.min.js";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/waterLog" element={<WaterLog />} />
        <Route path="/User" element={<User />}/>
        <Route path="/testimony" element={<Testimonies />}/>
        <Route path="/reminder" element={<Reminder />}/> 
        <Route path="/progressReport" element={<ProgressReport />}/>
        {/* Define other routes */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;