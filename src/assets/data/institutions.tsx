import Institution from "../types/institution";

const institutions: Institution[] = [
  {
    id: 1,
    name: 'University of Georgia',
    degree: "Bachelor's Degree",
    major: 'Consumer Economics',
    graduation: 'December 2017',
    city: 'Athens',
    state: 'GA',
    logo: 'https://uga-logo.s3.amazonaws.com/ugaLogo.jpeg'
  },
  {
    id: 2,
    name: 'Turing School of Software & Design',
    degree: 'Technical Certificate',
    city: 'Denver',
    state: 'CO',
    graduation: 'November 2020',
    major: 'Backend Engineering',
    logo: 'https://turing-logo.s3.amazonaws.com/turingLogo.png'
  }
]

export default institutions