import './App.css'
import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Projects from './components/screens/projects'
import Education from './components/screens/education'
import Experience from './components/screens/experience'
import About from './components/screens/about'

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<About/>}/>
          <Route path="/education" element={<Education/>}/>
          <Route path="/experience" element={<Experience/>}/>
          <Route path="/projects" element={<Projects/>}/>

        </Routes>
      </Router>
    </div>
  );
}

export default App;
