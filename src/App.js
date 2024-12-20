import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Projects from './components/screens/projects'
import Education from './components/screens/education'
import About from './components/screens/about'
import hobbies from './assets/data/hobbies.tsx'
import institutions from './assets/data/institutions.tsx'
import projects from './assets/data/projects.tsx'
import developer from './assets/data/developer'
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route 
            path="/" 
            element={
              <About 
                developer={developer} 
                hobbies={hobbies}
              />
            }
          />
          <Route 
            path="/education" 
            element={
              <Education 
                institutions={institutions}
              />
            }
          />
          <Route 
            path="/projects" 
            element={
              <Projects 
                projects={projects}
              />
            }
          />
        </Routes>
      </Router>
    </div>
  )
}

export default App;
