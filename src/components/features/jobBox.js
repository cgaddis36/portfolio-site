import React from 'react'
import styles from '../styles/jobBox.module.css'

function JobBox({
  title,
  startDate,
  endDate,
  summary,
  company,
  industry
}) {
  return (
    <div className={styles.box}>
      <div className={styles.title}>
        {title}
      </div>
      <div className={styles.company}>
        {company}
      </div>
      <div className={styles.industry}>
        {industry + " Industry"}
      </div>
      <div className={styles.summary}>
        {summary}
      </div>
      <div className={styles.dates}>
        {startDate + " - " + endDate}
      </div>
    </div>
  )
}
export default JobBox