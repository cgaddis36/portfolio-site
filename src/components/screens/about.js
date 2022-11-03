import React from 'react'
import styles from '../styles/about.module.css'
import NavBar from '../features/navBar'

function About() {
  return(
    <div className={styles.main}>
      <div className={styles.title}>
        About Chase
      </div>
      <NavBar
        active={'about'}
        />
      <div className={styles.container}>

      </div>

    </div>

  )
}

export default About