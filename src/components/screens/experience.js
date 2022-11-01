import React from 'react'
import styles from '../styles/experience.module.css'
import NavBar from '../features/navBar'

function Experience() {
  return(
    <div className={styles.main}>
      <div className={styles.title}>
        Chase's Experience
      </div>
      <NavBar
        active={'education'}
        />
      <div className={styles.container}>

      </div>

    </div>

  )
}

export default Experience