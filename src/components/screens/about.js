import React, { useState } from 'react'
import styles from '../styles/about.module.css'
import Header from '../features/header'
import skiImage from '../images/skiChris.png'
import hikeImage from '../images/hike.png'
import bikeImage from '../images/beachBikes.png'
import flyImage from '../images/fly.png'
import diveImage from '../images/beachSunset.png'
import skiVideo from '../videos/ski.mp4'
import hikeVideo from '../videos/hiking.mp4'
import bikeVideo from '../videos/biking.mp4'
import flyVideo from '../videos/beachFlyFish.mp4'
import diveVideo from '../videos/diving.mp4'

function About({loading, developer}) {
  const hobbies = developer.hobbies
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
  const videoHash = {
    "ski": skiVideo,
    "hike": hikeVideo,
    "dive": diveVideo,
    "bike": bikeVideo,
    "fly": flyVideo
  }
  
  return(
    <div className={styles.main}>

        <Header 
          active={'about'}
          title={"Chase's Portfolio Site"}
          />  
      <div className={styles.container}>
        {loading ?
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
          
          <div className={styles.vidContainer}>
            {hobbies.map((hobby, index) => 
              <video src={videoHash[hobby.image]} autoPlay loop muted className={index == activeHobby ? styles.video : styles.inactiveVideo} />
            )}
            <div className={styles.overlay}>
            <div className={styles.section}>
              
              <div className={styles.header2}>
                About Me
              </div>
              <div className={styles.body}>
                {developer.background}
              </div>
            </div>
            <div className={styles.section}>
              <div className={styles.header}>
                Hobbies
              </div>
              <div className={styles.hobbies}>
                <div className={styles.images}> 
                  {hobbies.map((hobby, index) => 
                    <img 
                      src={imageHash[hobby.image]}
                      className={index == activeHobby ? styles.hobbyImage : styles.inactiveHobbyImage}
                      />
                  )}
                </div>
                <div className={styles.column}>
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
        </div>}
      </div>
    </div>
  )
}

export default About