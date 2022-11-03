export default function FetchJobs({
  setJobs,
  setLoading
}) {
  setLoading(true)
  return fetch('http://localhost:4000/graphql', {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query:
        `query {
          jobs{
            title
            industry 
            company 
            city
            state
            summary
            startDate
            endDate
          }}`,
     }),
  }, [])
  .then((response) => {
    if (response.ok) {
      const data = response.json()
      return data
    } else {
      console.log("Error occured during fetch request.")
      throw response
    }
  })
  .then((data) => {
    var data1 = data["data"] 
    console.log("Jobs Data", data1)
    var jobsData = data1["jobs"]
    setJobs(jobsData)
    setLoading(false)
    return jobsData
  })
}