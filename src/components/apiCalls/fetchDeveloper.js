export default function FetchDeveloper({
  setDeveloper,
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
          findDeveloper{
            firstName 
            lastName 
            github 
            background
            email 
            phone 
            hobbies {
              name 
              video 
              image
            }
            institutions {
              name 
              degree
              major 
              city
              state
              graduation
              logo
            }
            jobs {
              title
              industry 
              company 
              city
              state
              summary
              startDate
              endDate
            }
            projects {
              name 
              description
              url 
              github
              features
              frameworks
              apis
              hosts
              classification
            }
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
    console.log("Developer Data", data1)
    var developerData = data1["findDeveloper"]
    setDeveloper(developerData)
    setLoading(false)
    return developerData
  })
}

