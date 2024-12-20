import styles from '../styles/projectBox.module.css'

function ProjectBox({
  index,
  name,
  frameworks,
  classification,
  description,
  setModal,
  setProject
}) {
  console.log("key", index)
  const modalSetter = () => {
    setProject(index)
    setModal(true)
  }
  return (
    <div 
      className={styles.project}
      onClick={modalSetter}
      >
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