import React, {useState} from 'react'
import styles from '../styles/navBar.module.css'
import { useNavigate } from 'react-router-dom'
function NavBar({
  active
}) {
  const navigate = useNavigate()
  const swapPath = (path) => {
    navigate(path)
  }
  return (
  <div className={styles.nav}>
    <div 
      onClick={() => swapPath('/')} 
      className={active === 'projects' ? styles.active : styles.navButton}
      >
      Projects
    </div>
     <div
      onClick={() => swapPath('/education')} 
      className={active === 'education' ? styles.active : styles.navButton}
      >
      Education
    </div>
    <div 
      onClick={() => swapPath('/experience')} 
      className={active === 'experience' ? styles.active : styles.navButton}
      >
      Experience
    </div>
    <div 
      onClick={() => swapPath('/about')} 
      className={active === 'about' ? styles.active : styles.navButton}
      >
      About Me
    </div>
  </div>
  )
}
export default NavBar