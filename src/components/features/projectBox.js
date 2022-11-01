import React from 'react'
import styles from '../styles/projectBox.module.css'

function ProjectBox({
  name,
  frameworks,
  classification,
  description
}) {
  return (
    <div className={styles.project}>
      <div className={styles.name}>
        {name}
        <div className={styles.classification}>
          {classification}
        </div>
      </div>
      <div className={styles.description}>
        {description}
      </div>
      <div className={styles.frameworks}>
        {
          frameworks.map((framework) => 
            <div className={styles.bullet}>
              {framework}
            </div>
          )
        }
      </div>
    </div>
  )
}
export default ProjectBox