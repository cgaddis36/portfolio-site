export default function FetchProjects({
  setProjects,
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
          projects{
            name 
            description
            url 
            github
            features
            frameworks
            apis
            hosts
            classification
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
    console.log("Projects Data", data["data"])
    var projectsData = data["data"]["projects"]
    setProjects(projectsData)
    setLoading(false)
    return projectsData
  })
}