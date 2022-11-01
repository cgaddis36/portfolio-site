import React from 'react'
import styles from '../styles/education.module.css'
import NavBar from '../features/navBar'

function Education() {
  return(
    <div className={styles.main}>
      <div className={styles.title}>
        Chase's Education
      </div>
      <NavBar
        active={'education'}
        />
      <div className={styles.container}>

      </div>

    </div>

  )
}

export default Education