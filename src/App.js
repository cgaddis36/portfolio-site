import './App.css'
import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Splash from './components/screens/splash'

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Splash/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
