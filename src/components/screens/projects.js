import React, { useState } from 'react'
import styles from '../styles/projects.module.css'
import ProjectBox from '../features/projectBox' 
import Header from '../features/header'
import Modal from '../features/modal'

function Projects({projects}) {

  const [modal, setModal] = useState(false)
  const [project, setProject] = useState(0)
  console.log("project Projects", project)

  return (
    <div className={styles.main}>
      <Header 
        active={'projects'}
        title={"Projects"}
        /> 
      <div className={styles.container}>
        {projects.map((project, index) =>
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
        )}
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