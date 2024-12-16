import './App.css'
import React, { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Projects from './components/screens/projects'
import Education from './components/screens/education'
import Experience from './components/screens/experience'
import About from './components/screens/about'
import hobbies from './components/data/hobbies'

function App() {
  const [loading, setLoading] = useState(true)

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<About hobbies={hobbies} loading={loading}/>}/>
          <Route path="/education" element={<Education developer={developer}/>}/>
          <Route path="/experience" element={<Experience developer={developer}/>}/>
          <Route path="/projects" element={<Projects developer={developer}/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
