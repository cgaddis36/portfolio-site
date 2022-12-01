import React, { useState } from 'react'
import styles from '../styles/about.module.css'
import Header from '../features/header'

function About({loading, developer}) {
  console.log("Developer About Screen", developer.hobbies)
  const hobbies = developer.hobbies
  const [activeHobby, setActiveHobby] = useState(0)
  const hobby = hobbies[activeHobby]
  const activeVideo = hobby.video
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
  return(
    <div className={styles.main}>
      <Header 
        active={'about'}
        title={"About Me"}
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
        <div className={styles.vidContainer}>
          {hobbies.map((hobby, index) => 
            <video src={hobby.video} autoPlay loop muted className={index == activeHobby ? styles.video : styles.inactiveVideo} />

          )}
          <div className={styles.overlay}></div>
          <div className={styles.section}>
            <div className={styles.header}>
              Background
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
                    src={hobby.image}
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
}
      </div>
    </div>
  )
}

export default About