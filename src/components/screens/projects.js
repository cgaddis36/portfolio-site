import React, { useState, useEffect } from 'react'
import FetchProjects from '../apiCalls/fetchProjects'
import styles from '../styles/projects.module.css'
import ProjectBox from '../features/projectBox' 
import Header from '../features/header'
import Modal from '../features/modal'

function Projects() {
  const [loading, setLoading] = useState(false)
  const [modal, setModal] = useState(false)
  const [projects, setProjects] = useState([])
  const [project, setProject] = useState(0)
  console.log("project Projects", project)
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
              index={index}
              name={project.name}
              description={project.description}
              features={project.features}
              apis={project.apis}
              frameworks={project.frameworks}
              classification={project.classification}
              hosts={project.hosts}
              url={project.url}
              github={project.github}
              setModal={setModal}
              setProject={setProject}
            />
          )
        }
        {
          modal ?
          <Modal 
            projects={projects}
            project={project}
            setModal={setModal}
            setProject={setProject}
            />
            :
            null
        }
      </div>

    </div>
  )
}
export default Projects