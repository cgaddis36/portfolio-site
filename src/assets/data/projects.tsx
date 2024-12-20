import Project from "../types/project";
const projects: Project[] = [
  {
    id: 1,
    name: 'ShoreCasts',
    classification: 'Mobile App',
    url: 'https://www.shorecasts.com',
    frameworks: [
      'Rails', 
      'React',
      'React Native'
    ],
    languages: [
      'Ruby', 
      'JavaScript', 
      'SQL', 
      'GraphQL', 
      'TypeScript'
    ],
    hosts: [
      'Apple App Store',
      'Google Play Store', 
      'Elastic Beanstalk', 
      'RDS',
      'EC2',
      'Route 53',
      'Amplify'
    ],
    description: 'Mobile application designed to help inshore saltwater anglers Catch the Perfect Day by centralizing the necessary forecasting tools that recreational boaters and saltwater anglers utilize to plan their days on the water.',
    github: 'private',
    features: [
      'Tidal Forecasts',
      'Hourly Weather Predictions', 
      'Daily Weather Predictions', 
      'Water Temperatures', 
      'Tackle Shop Locations',
      'Marina Locations', 
      'Wind Forecasts', 
    ],
    apis: [
      'NOAA Tides & Currents', 
      'National Weather Service', 
    ],
  },
  {
    id: 2,
    name: 'Shrimp Republic',
    classification: 'Web App',
    url: 'https://www.shrimp-republic.com',
    frameworks: [
      'Rails', 
      'React'
    ],
    languages: [
      'JavaScript', 
      'GraphQL'
    ],
    hosts: [
      'AWS Amplify'
    ],
    description: 'Flagship website for Shrimp Republic Studios designed to showcase development projects and general business information.',
    github: 'private',
    features: [
      'Progressive Web Application', 
      'Custom Artwork using Adobe Illustrator'
    ],
    apis: [],
  },
  {
    id: 3,
    name: 'GameDrive',
    classification: 'Web App',
    url: 'http://gamedev.ucode.run/auth/sign-in',
    frameworks: [
      'Vue', 
    ],
    languages: [
      'GoLang', 
      'JavaScript', 
      'SQL'
    ],
    hosts: [
      'AWS Amplify', 
      'Elastic Beanstalk', 
      'RDS'
    ],
    description: 'Designed to centralize the location for all of the necessary forecasting tools that recreational boaters and saltwater anglers utilize to plan their days on the water.',
    github: 'private',
    features: [
      'User Login', 
      'Game Stats Tracker',
      'Teams Dashboard'
    ],
    apis: [
      'Steam', 
      'Riot Games', 
    ],
  },
  {
    id: 4,
    name: 'ChessMeito',
    classification: 'Mobile App',
    url: 'https://www.shorecasts.com',
    frameworks: [
      'Django', 
      'React Native', 
      'Vue'
    ],
    languages: [
      'Python', 
      'JavaScript', 
      'SQL'
    ],
    hosts: [
      'AWS Amplify', 
      'Elastic Beanstalk', 
      'Apple App Store',
      'Google Play Store'
    ],
    description: 'ChessMeito, where chess meets history. Enjoy two curated puzzles a day with the free version or subscribe and dive into over 6,000 puzzles drawn from actual Grandmaster matches, putting you in the shoes of chess legends.',
    github: 'private',
    features: [
      'Chess Games',
      'User Subscriptions' 
  ],
    apis: [
      'Glassfy'
    ],
  },
  {
    id: 5,
    name: 'Claims Form',
    classification: 'Web App',
    url: 'https://www.leapeasy.com/claim-form/',
    github: 'https://www.leapeasy.com/claim-form/',
    frameworks: [
      'Rails', 
      'GraphQL', 
      'React'
    ],
    languages: [
      'Ruby', 
      'JavaScript', 
      'SQL'

    ],
    hosts: [
      'AWS Amplify', 
      'Elastic Beanstalk', 
      'RDS'

    ],
    description: 'Claims form designed to help landlords file insurance claims on their policies.',
    apis: [
      'Salesforce'

    ],
    features: [
      'Google Places Autocomplete', 
      'Salesforce Automation', 
    ],
  },
  {
    id: 6,
    name: 'Lease Deposit Replacement Short Form',
    classification: 'Web App',
    url: 'https://www.leapeasy.com/renter-ldr-form/',
    github: 'Private',
    frameworks: [
      'Rails', 
      'GraphQL', 
      'React'
    ],
    languages: [
      'Ruby', 
      'JavaScript', 
      'SQL'

    ],
    hosts: [
      'AWS Amplify', 
      'Elastic Beanstalk', 
      'RDS'
    ],
    description: 'Short application form designed to screen tenants for insurance policies.',
    apis: [
      'Salesforce',
      'Google Places',
    ],
    features: [
      'Google Places Autocomplete', 
      'Salesforce Automation', 
    ],
  },
  {
    id: 7,
    name: 'Lease Deposit-Replacement Form',
    classification: 'Web App',
    url: 'https://www.leapeasy.com/renter-ldr-form/',
    github: 'https://www.leapeasy.com/claim-form/',
    frameworks: [
      'Rails', 
      'GraphQL', 
      'React'
    ],
    languages: [
      'Ruby', 
      'JavaScript', 
      'SQL'

    ],
    hosts: [
      'AWS Amplify', 
      'Elastic Beanstalk', 
      'RDS'

    ],
    description: 'Application form designed to screen tenants for insurance policies.',
    apis: [
      'Salesforce'

    ],
    features: [
      'Google Places Autocomplete', 
      'Salesforce API Integration'
    ],
  },
  {
    id: 8,
    name: 'Rent Guaranty Form',
    classification: 'Web App',
    url: 'https://www.leapeasy.com/renter-application/',
    github: 'Private',
    frameworks: [
      'Rails', 
      'GraphQL', 
      'React'
    ],
    languages: [
      'Ruby', 
      'JavaScript', 
      'SQL'
    ],
    hosts: [
      'AWS Amplify', 
      'Elastic Beanstalk', 
      'RDS'
    ],
    description: 'Application form designed to screen tenants for insurance policies.',
    apis: [
      'Salesforce'

    ],
    features: [
      'Google Places Autocomplete', 
      'Salesforce API Integration'
    ],
  },
  {
    id: 9,
    name: 'Landlord Contact Form',
    classification: 'Web App',
    url: 'https://www.leapeasy.com/landlord-application/',
    github: 'Private',
    frameworks: [
      'Rails', 
      'GraphQL', 
      'React'
    ],
    languages: [
      'Ruby', 
      'JavaScript', 
      'SQL'

    ],
    hosts: [
      'AWS Amplify', 
      'Elastic Beanstalk', 
      'RDS'
    ],
    description: 'Claims form designed to help landlords sign up to offer a specific insurance product.',
    apis: [
      'Salesforce',
      'Google Places'
    ],
    features: [
      'Google Places Autocomplete', 
      'Salesforce Automation', 
    ],
  },
  {
    id: 10,
    name: 'Landlord Invite Form',
    classification: 'Web App',
    url: 'N/A',
    github: 'Private',
    frameworks: [
      'Rails', 
      'GraphQL', 
      'React'
    ],
    languages: [
      'Ruby', 
      'JavaScript', 
      'SQL'

    ],
    hosts: [
      'AWS Amplify', 
      'Elastic Beanstalk', 
      'RDS'

    ],
    description: 'Application form designed to help landlords sign their tenants up for insurance products.',
    apis: [
      'Salesforce',
      'Google Places'
    ],
    features: [
      'Google Places Autocomplete', 
      'Salesforce Automation', 

    ],
  },
  {
    id: 11,
    name: 'Veterans to Doctors',
    classification: 'Web App',
    url: 'https://promenade.ai',
    github: 'https://promendae.ai',
    hosts: [
      'Heroku'

    ],
    frameworks: [
      'Rails', 
      'GraphQL', 
      'React'
    ],
    languages: [
      'Ruby', 
      'JavaScript', 
      'SQL'
    ],
    apis: [
      'Constructed Api'

    ],
    features: [
      'Admin Dashboard', 
      'Custom Location Finder', 
      'Stripe Payment Checkout'
    ],
      description: 'Microservice designed to help veterans locate specific medical services to facilitate their navigation of post-military life.'
  }
]

export default projects