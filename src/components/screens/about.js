import React, { useState } from 'react'
import styles from '../styles/about.module.css'
import Header from '../features/header'
import beachSunset from '../images/beachSunset.png'
import skiing from '../images/skiChris.png'
import flyfish from '../images/fly.png'
import beachBikes from '../images/beachBikes.png'
import hike from '../images/hike.png'
import FlyVid from '../videos/beachFly.mp4'
import SkiVid from '../videos/kachina.mp4'
import DiveVid from '../videos/diving.mp4'
import BikeVid from '../videos/biking.mp4'
import HikeVid from '../videos/hiking.mp4'


function About() {
  const hobbies = [
    {name: 'Fly Fishing', image: flyfish, video: FlyVid},
    {name: 'Hiking', image: hike, video: HikeVid},
    {name: 'Skiing', image: skiing, video: SkiVid},
    {name: 'Diving', image: beachSunset, video: DiveVid},
    {name: 'Biking', image: beachBikes, video: BikeVid},
  ]
  const [activeHobby, setActiveHobby] = useState(0)
  const hobby = hobbies[activeHobby]
  const activeVideo = hobby.video
  const checkArrow = (direction) => {
    if(direction == 'right') {
      return(hobby.name !== 'Biking')
    } else {
      return(hobby.name !== 'Fly Fishing')
    }
  }
  const backHobby = () => {
    if(hobby.name !== 'Fly Fishing'){setActiveHobby(activeHobby - 1)}
  }
  const nextHobby = () => {
    if(hobby.name !== 'Biking'){setActiveHobby(activeHobby + 1)}
  }
  return(
    <div className={styles.main}>
      <Header 
        active={'about'}
        title={"About Me"}
        /> 
      <div className={styles.container}>
        <video src={activeVideo} autoPlay muted loop className={styles.video}/>
        <div className={styles.overlay}></div>
        <div className={styles.section}>
          <div className={styles.header}>
            Background
          </div>
          <div className={styles.body}>
            My main goal as a developer is to build highly personable applications designed to optimize efficiency and create solutions to real world problems.
            Innovation is what drives me in every project I build. Whether it be developing new services for a startup to help Veteran's navigate post Military life, 
            or bringing my own ideas to life; creating new products to solve business problems and provide widespread accessibility to arbitrary data is what greases
            my development gears. When I am not coding, you can find me throwing the ball with my labrador retriever Lilly in one of the local parks or fishing for 
            speckled sea trout & redfish from a kayak. I would be hard pressed to find a better day than hiking to a mountain stream and fly fishing all day.
          </div>
        </div>
        <div className={styles.section}>
          <div className={styles.header}>
            Hobbies
          </div>

          <div className={styles.hobbies}>
            <div className={styles.images}>
              <img 
                src={hobby.image}
                className={styles.hobbyImage}
                />
            </div>
            <div className={styles.column}>
              <div className={styles.hobby}>
                {hobby.name}
              </div>
              <div className={styles.nextButtons}>
               <div 
                  src={leftArrow}
                  onClick={() => backHobby()}
                  className={checkArrow('left') ? styles.activeArrow : styles.inactiveArrow}
                  > 
                  Last Hobby
                  </div>
                <div 
                  src={rightArrow}
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
  )
}

export default About