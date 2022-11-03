import styles from '../styles/modal.module.css'

function Modal({
  modal,
  setModal,
  project
}) {
  return (
    <div className={styles.modal}>
      <div className={styles.name}>
        {project.name}
      </div>
      <div className={styles.description}>
        {project.description}
      </div>
      <div className={styles.classification}>
        {project.classification}
      </div>
      <div className={styles.url}>
        {project.url}
      </div>
      <div className={styles.github}>
        {project.github}
      </div>
      <div 
        className={styles.close}
        onClick={() => setModal(false)}
        >
        CLOSE
      </div>
    </div>
    
  )
}
export default Modal