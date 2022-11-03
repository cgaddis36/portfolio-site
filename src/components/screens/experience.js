import React, { useState, useEffect } from 'react'
import styles from '../styles/experience.module.css'
import Header from '../features/header'
import JobBox from '../features/jobBox'
import FetchJobs from '../apiCalls/fetchJobs'
function Experience() {
  const [loading, setLoading] = useState(true)
  const [jobs, setJobs] = useState([]) 

  useEffect(() => {
    FetchJobs({
      setLoading,
      setJobs
    })
  }, [])
  return(
    <div className={styles.main}>
      <Header 
        active={'experience'}
        title={"Experience"}
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
          jobs.map((job, index) =>
            <JobBox 
              key={index}
              title={job.title}
              startDate={job.startDate}
              endDate={job.endDate}
              summary={job.summary}
              company={job.company}
              industry={job.industry}
              />
          )
        }
      </div>

    </div>

  )
}

export default Experience