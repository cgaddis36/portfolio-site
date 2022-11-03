import React, { useState, useEffect } from 'react'
import styles from '../styles/education.module.css'
import NavBar from '../features/navBar'
import ugaLogo from '../images/ugaLogo.png'
import turingLogo from '../images/turingLogo.png'
import InstitutionBox from '../features/institutionBox'
import FetchInstitutions from '../apiCalls/fetchInstitutions'

function Education() {
  const [institutions, setInstitutions] = useState([])
  const [loading, setLoading] = useState(true)
  const selectLogo = (name) => {
    if(name === "University of Georgia") {
      return ugaLogo 
    } else {
      return turingLogo
    }
  }
  useEffect(() => {
    FetchInstitutions({
      setLoading,
      setInstitutions
    })
  }, [])
  return(
    <div className={styles.main}>
      <div className={styles.title}>
        Chase's Education
      </div>
      <NavBar
        active={'education'}
        />
      <div className={styles.container}>
        <div className={styles.eduBoxes}>
          { loading ?
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
            institutions.map((institution, index) => 
              <InstitutionBox
                key={index}
                name={institution.name}
                city={institution.city}
                state={institution.state}
                graduation={institution.graduation}
                degree={institution.degree}
                major={institution.major}
                image={selectLogo(institution.name)}
                />
            )
          }
        </div>
      </div>

    </div>

  )
}

export default Education