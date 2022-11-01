import React, {useState} from 'react'
import styles from '../styles/navBar.module.css'

function NavBar({
  active
}) {
  return (
  <div className={styles.nav}>
    <div 
      className={active === 'projects' ? styles.active : styles.navButton}
      >
      Projects
    </div>
     <div className={styles.navButton}>
      Education
    </div>
    <div className={styles.navButton}>
      Experience
    </div>
    <div className={styles.navButton}>
      About Me
    </div>
  </div>
  )
}
export default NavBar