import React from 'react'
import styles from '../styles/institutionBox.module.css'

function InstitutionBox({
  name,
  city,
  state,
  graduation,
  major,
  image, 
  degree
}) {
  const location = city + ", " + state
  return(
    <div className={styles.box}>
      <div className={styles.top}>
        <div className={styles.row}>
        <img 
          src={image} 
          className={styles.logo}
          />
        <div className={styles.column}>
          <div className={styles.name}>
            {name}
          </div>
          <div className={styles.location}>
              {"Location: " + location}
          </div>
          <div className={styles.degree}>
            {degree + ": " + major}
          </div>

          <div className={styles.graduation}>
            Graduation: {graduation}
          </div>
        </div>
        </div>  
      </div>         
    </div>
  )
}
export default InstitutionBox