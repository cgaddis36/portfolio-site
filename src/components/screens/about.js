import React from 'react'
import styles from '../styles/about.module.css'
import Header from '../features/header'
import beachSunset from '../images/beachSunset.png'
import skiing from '../images/skiChris.png'
import flyfish from '../images/fly.png'
import beachBikes from '../images/beachBikes.png'
import hike from '../images/hike.png'

function About() {
  return(
    <div className={styles.main}>
      <Header 
        active={'about'}
        title={"About Me"}
        /> 
      <div className={styles.container}>
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
          <div className={styles.hobby}>
            Fly Fishing
            <div className={styles.images}>
              <img 
                src={flyfish}
                className={styles.hobbyImage}
                />
            </div>
          </div>
          <div className={styles.hobby}>
            Hiking
            <div className={styles.images}>
              <img 
                src={hike}
                className={styles.hobbyImage}
                />
            </div>
          </div>
          <div className={styles.hobby}>
            Skiing
            <div className={styles.images}>
              <img 
                src={skiing}
                className={styles.hobbyImage}
                />
            </div>
          </div>
          
          <div className={styles.hobby}>
            Diving
            <div className={styles.images}>
              <img 
                src={beachSunset}
                className={styles.hobbyImage}
                />
            </div>
          </div>
          <div className={styles.hobby}>
            Biking
            <div className={styles.images}>
              <img 
                src={beachBikes}
                className={styles.hobbyImage}
                />
            </div>
          </div>
        </div>
        </div>

      </div>
    </div>
  )
}

export default About