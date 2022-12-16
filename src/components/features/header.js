import React from 'react'
import styles from '../styles/header.module.css'
import NavBar from '../features/navBar'
import { useNavigate } from 'react-router-dom'

function Header({
  active,
  title
}) {
  const navigate = useNavigate()
  const swapPath = (path) => {
    navigate(path)
  }
  return(
    <div className={styles.top}>
      <div className={styles.header}>
        <NavBar
          active={active}
          />
        <div className={styles.title}>
          {title}
        </div>
        <div className={styles.headerContainer}>
          <div className={styles.headerInfoColumn}>
            <div className={styles.name}>
              Chase Gaddis
            </div>
            <div className={styles.role}>
              Software Engineer
            </div>
          </div>
          <div className={styles.headerInfoColumn}>
            <div className={styles.email}>
                cgaddis36@gmail.com
            </div>
            <div className={styles.info}>
                (850)582-2223
            </div>
           </div>
        </div>
      </div>
    </div>
  )
}

export default Header