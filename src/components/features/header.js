import styles from '../styles/header.module.css'
import NavBar from '../features/navBar'

function Header({
  active,
  title
}) {
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
              Full-Stack Engineer
            </div>
          </div>
          <div className={styles.headerInfoColumn}>
            <div className={styles.email}>
                cgaddis36@gmail.com
            </div>
           </div>
        </div>
      </div>
    </div>
  )
}

export default Header