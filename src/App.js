import './App.css'
import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Splash from './components/screens/splash'
import Education from './components/screens/education'
import Experience from './components/screens/experience'
import About from './components/screens/about'

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Splash/>}/>
          <Route path="/education" element={<Education/>}/>
          <Route path="/experience" element={<Experience/>}/>
          <Route path="/about" element={<About/>}/>

        </Routes>
      </Router>
    </div>
  );
}

export default App;
