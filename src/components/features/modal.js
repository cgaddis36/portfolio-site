import React from 'react'
import styles from '../styles/modal.module.css'
import xIcon from '../images/x.svg'
function Modal({
  projects,
  setModal,
  project,
  setProject
}) {
  const activeProject = projects[project] 
  const nextClick = (pro) => {
    setProject(pro)
  }
  const navigatePath = () => {
    window.open(activeProject.url)
  }
  const githubShow = () => {
    if(activeProject.github === activeProject.url) {
      return false
    } else {
      return true
    }
  }
  const show = githubShow()
  const githubNav = () => {
    window.open(activeProject.github)
  }
  return (
    <div className={styles.modal}>
      <div className={styles.row}>
        {
          show ?
          <div 
            onClick={githubNav}
            className={styles.github}
            >
            Github
          </div>
          :
          <div className={styles.github}>
            </div>
        }
        <div className={styles.titleHeader}>
          <div 
            className={styles.name}
            onClick={navigatePath}
            >
            {activeProject.name}
          </div>
          <div className={styles.classification}>
            {"(" + activeProject.classification + ")"}
          </div>
        </div>
        <img 
          src={xIcon}
          className={styles.xIcon}
          onClick={() => setModal(false)}
          />
      </div>

      <div className={styles.header}>
        Description
      </div>
      <div className={styles.description}>
        {activeProject.description}
      </div>
      <div className={styles.header}>
        Apis
      </div>
      <div className={styles.apis}>
        {
          activeProject.apis.map((api) => 
          <div className={styles.api}>
              {api}
          </div>
          )
        }
      </div>
      <div className={styles.header}>
        Features
      </div>
      <div className={styles.features}>
        {
          activeProject.features.map((feature) => 
            <div className={styles.feature}>
              {feature}
            </div>
          )
        }
      </div>
      <div className={styles.header}>
        Hosting Architecture
      </div>

      <div className={styles.hosts}>
        {
          activeProject.hosts.map((host) => 
            <div className={styles.host}>
              {host}
            </div>
          )
        }
      </div>
      <div className={styles.header}>
        Frameworks Used
      </div>
      <div className={styles.frameworks}>
        {
          activeProject.frameworks.map((framework) => 
            <div className={styles.bullet}>
              {framework}
            </div>
          )
        }
      </div>
    </div>
    
  )
}
export default Modal