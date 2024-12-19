import { useState } from 'react'
import styles from '../styles/about.module.css'
import Header from '../features/header'
import skiImage from '../../assets/images/skiChris.png'
import hikeImage from '../../assets/images/hike.png'
import bikeImage from '../../assets/images/beachBikes.png'
import flyImage from '../../assets/images/fly.png'
import diveImage from '../../assets/images/beachSunset.png'

function About({developer, hobbies}) {
  const [activeHobby, setActiveHobby] = useState(0)
  const hobby = hobbies[activeHobby]
  const checkArrow = (direction) => {
    if(direction === 'right') {
      return(hobby !== hobbies[hobbies.length - 1])
    } else {
      return(hobby !== hobbies[0])
    }
  }
  const backHobby = () => {
    if(hobby !== hobbies[0]){setActiveHobby(activeHobby - 1)}
  }
  const nextHobby = () => {
    if(hobby !== hobbies[hobbies.length - 1]){setActiveHobby(activeHobby + 1)}
  }
  const imageHash = {
    "ski": skiImage,
    "hike": hikeImage,
    "dive": diveImage,
    "bike": bikeImage,
    "fly": flyImage
  }

  return(
    <div className={styles.main}>
      <Header 
        active={'about'}
        title={"Chase's Portfolio Site"}
      />  
      <div className={styles.container}>
        <div className={styles.vidContainer}>
          <video 
            className={styles.video} 
            src={hobbies[activeHobby].video} 
            autoPlay 
            loop 
            muted 
          />
          <div className={styles.overlay}>
            <div className={styles.topSection}>
              <div className={styles.aboutHeader}>
                About Me
              </div>
              <div className={styles.body}>
                {developer.background}
              </div>
            </div>
            <div className={styles.bottomSection}>
              <div className={styles.leftColumn}>
                <div className={styles.hobbyHeader}>
                  Hobbies
                </div>
                <div className={styles.hobbies}>
                  <div className={styles.images}> 
                    {
                      hobbies.map((hobby, index) => 
                        <img 
                          src={imageHash[hobby.image]}
                          className={index == activeHobby ? styles.hobbyImage : styles.inactiveHobbyImage}
                        />
                      )
                    }
                  </div>
                </div>
              </div>
              <div className={styles.rightColumn}>
                <div className={styles.hobby}>
                  {hobby.name}
                </div>
                <div className={styles.nextButtons}>
                  <div 
                    onClick={() => backHobby()}
                    className={checkArrow('left') ? styles.activeArrow : styles.inactiveArrow}
                  > 
                    Last Hobby
                  </div>
                  <div 
                    onClick={() => nextHobby()}
                    className={checkArrow('right') ? styles.activeArrow : styles.inactiveArrow}
                  >
                    Next Hobby
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About