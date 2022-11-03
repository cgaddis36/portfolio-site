import React, { useState, useEffect } from 'react'
import FetchProjects from '../apiCalls/fetchProjects'
import styles from '../styles/splash.module.css'
import ProjectBox from '../features/projectBox' 
import Header from '../features/header'
function Splash() {
  const [loading, setLoading] = useState(false)
  const [projects, setProjects] = useState([])
  useEffect(() => {
    FetchProjects({
      setLoading,
      setProjects
    })
  }, [])
  return (
    <div className={styles.main}>
      <Header 
        active={'projects'}
        title={"Projects"}
        /> 
      <div className={styles.container}>
        {
          loading ?
          <div className={styles.loading}>
            <div className={styles.loading__letter}>L</div>
            <div className={styles.loading__letter}>o</div>
            <div className={styles.loading__letter}>a</div>
            <div className={styles.loading__letter}>d</div>
            <div className={styles.loading__letter}>i</div>
            <div className={styles.loading__letter}>n</div>
            <div className={styles.loading__letter}>g</div>
            <div className={styles.loading__letter}>.</div>
            <div className={styles.loading__letter}>.</div>
            <div className={styles.loading__letter}>.</div>
          </div>
          :
          projects.map((project, index) =>
            <ProjectBox
              key={index}
              name={project.name}
              description={project.description}
              features={project.features}
              apis={project.apis}
              frameworks={project.frameworks}
              classification={project.classification}
              hosts={project.hosts}
              url={project.url}
              github={project.github}
            />
          )
        }
      </div>

    </div>
  )
}
export default Splash