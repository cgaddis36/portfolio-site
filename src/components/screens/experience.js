import React from 'react'
import styles from '../styles/experience.module.css'
import Header from '../features/header'
import JobBox from '../features/jobBox'

function Experience({developer}) {
  const jobs = developer.jobs 


  return(
    <div className={styles.main}>
      <Header 
        active={'experience'}
        title={"Experience"}
        /> 
      <div className={styles.container}>

      {    jobs.map((job, index) =>
            <JobBox 
              key={index}
              title={job.title}
              startDate={job.startDate}
              endDate={job.endDate}
              summary={job.summary}
              company={job.company}
              industry={job.industry}
              />
          )}
      </div>

    </div>

  )
}

export default Experience