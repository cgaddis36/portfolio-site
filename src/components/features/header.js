import styles from '../styles/header.module.css'
import NavBar from '../features/navBar'

function Header({
  active,
  title
}) {
  return(
    <div className={styles.main}>
      <NavBar
        active={active}
      />
      <div className={styles.title}>
        {title}
      </div>
      <div className={styles.headerRight}>
        <div className={styles.email}>
          Contact Me: cgaddis36@gmail.com
        </div>
      </div>
    </div>
  )
}

export default Header