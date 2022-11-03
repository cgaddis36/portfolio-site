import React from 'react'
import styles from '../styles/header.module.css'
import NavBar from '../features/navBar'

function Header({
  active,
  title
}) {
  return(
    <div className={styles.top}>
      <div className={styles.header}>
        <div className={styles.headerContainer}>
          <div className={styles.name}>
            Chase Gaddis
          </div>
          <div className={styles.role}>
            Software Developer
          </div>
        
        </div>
        <div className={styles.title}>
          {title}
        </div>
        <div className={styles.headerContainer}>
          <div className={styles.email}>
              cgaddis36@gmail.com
          </div>
          <div className={styles.info}>
              (850)582-2223
          </div>
        </div>

      </div>
      <NavBar
          active={active}
          />
    </div>
  )
}

export default Header