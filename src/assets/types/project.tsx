import Job from "./job"

interface Project {
  id: Number,
  name: String,
  classification: String,
  url: String,
  github: String,
  hosts: String[],
  frameworks: String[],
  languages: String[],
  apis: String[],
  features: String[],
  description: String,
  job: Job
}

export default Project