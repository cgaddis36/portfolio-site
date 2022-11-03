export default function FetchInstitutions({
  setInstitutions,
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
          institutions{
            name 
            degree
            major 
            city
            state
            graduation
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
    console.log("institutions Data", data1)
    var institutionsData = data1["institutions"]
    setInstitutions(institutionsData)
    setLoading(false)
    return institutionsData
  })
}

