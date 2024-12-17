import styles from '../styles/education.module.css'
import Header from '../features/header'
import InstitutionBox from '../features/institutionBox'

function Education({institutions}) {
  return(
    <div className={styles.main}>
      <Header 
        active={'education'}
        title={"Education"}
        /> 
      <div className={styles.container}>
        <div className={styles.eduBoxes}>
          { 
            institutions.map((institution, index) => 
              <InstitutionBox
                key={index}
                name={institution.name}
                city={institution.city}
                state={institution.state}
                graduation={institution.graduation}
                degree={institution.degree}
                major={institution.major}
                image={institution.logo}
                />
              )
          }
        </div>
      </div>
    </div>
  )
}
export default Education