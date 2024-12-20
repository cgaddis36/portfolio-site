
interface Project {
  id: number,
  name: string,
  classification: string,
  url: string,
  github: string,
  hosts: string[],
  frameworks: string[],
  languages: string[],
  apis: string[],
  features: string[],
  description: string,
}

export default Project