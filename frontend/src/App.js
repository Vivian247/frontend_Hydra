import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import WaterLog from './components/WaterLog/waterLog';
// Import other components
import User from './components/User/User';
import Testimonies from './components/Testimony/testimony';   
import Reminder from './components/Reminder/reminder';
import ProgressReport from './components/ProgressReport/progressReport'


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/waterLog" element={<WaterLog />} />
        <Route path="/User" element={<User />}/>
        <Route path="/testimony" element={<Testimonies />}/>
        <Route path="/reminder" element={<Reminder />}/> 
        <Route path="/progressReport" element={<ProgressReport />}/>
        {/* Define other routes */}
      </Routes>
    </Router>
  );
}

export default App;