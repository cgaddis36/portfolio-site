import styles from '../styles/navBar.module.css'
import { useNavigate } from 'react-router-dom'
function NavBar({
  active
}) {
  const navigate = useNavigate()
  return (
  <div className={styles.main}>
    <div 
      onClick={() => navigate('/')} 
      className={active === 'about' ? styles.active : styles.navButton}
    >
      About Me
    </div>
    <div 
      onClick={() => navigate('/projects')} 
      className={active === 'projects' ? styles.active : styles.navButton}
    >
      Projects
    </div>
    <div 
      onClick={() => navigate('/blog')} 
      className={active === 'blog' ? styles.active : styles.navButton}
    >
      Blog
    </div>
    <div
      onClick={() => navigate('/education')} 
      className={active === 'education' ? styles.active : styles.navButton}
    >
      Education
    </div>
  </div>
  )
}
export default NavBar