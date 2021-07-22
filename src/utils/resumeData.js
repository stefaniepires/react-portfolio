import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import YouTubeIcon from '@material-ui/icons/YouTube';
import PinterestIcon from '@material-ui/icons/Pinterest';
import RedditIcon from '@material-ui/icons/Reddit';

import PhoneIphoneIcon from '@material-ui/icons/PhoneIphone';
import EmailIcon from '@material-ui/icons/Email';

import fridgeFriend from '../assets/projects/fridge_friend.png';
import budgetTracker from '../assets/projects/budget_tracker.png';
import memeOries from '../assets/projects/memeOries.png';
import deckHalls from '../assets/projects/deck_halls.png';
import nomader from '../assets/projects/nomader_where.png';
import pwa from '../assets/projects/pwa.png';
import social from '../assets/projects/social+api.gif';
import taskmaster from '../assets/projects/taskmaster_pro.png';
import techBlog from '../assets/projects/tech_blog.png';
import weatherDash from '../assets/projects/weather_dashboard.png';


export default {
  name: 'Stefanie Pires',
  title: 'Full Stack Developer',
  description: 'Motivated and creative Full Stack Developer passionate about creating user-friendly software.',
  location: ' Dallas-Ft. Worth, TX',
  about:'Motivated Full Stack Development graduate passionate about developing user-friendly software. Highly organized with ability to work with a team and provide excellent communication. Known among staff for creativity, resourcefulness as well as agility to complete tasks with minimal to no errors.  ',

  socials: {
    linkedin: {
      url:'https://www.linkedin.com/in/stefanietinsley/',
      text: 'linkedin',
      icon: <LinkedInIcon/>,
    },
    github: {
      url:'https://github.com/stefaniepires',
      text: 'github',
      icon: <GitHubIcon/>,
    },

    instagram: {
      url:'www.instagram.com',
      text: 'instagram',
      icon: <InstagramIcon/>,
    },

    twitter: {
      url:'www.twitter.com',
      text: 'twitter',
      icon: <TwitterIcon/>,
    },

    youtube: {
      url:'www.youtube.com',
      text: 'youtube',
      icon: <YouTubeIcon/>,
    },

    pinterest: {
      url:'www.pinterest.com',
      text: 'pinterest',
      icon: <PinterestIcon/>,
    },

    reddit: {
      url:'www.reddit.com',
      text: 'reddit',
      icon: <RedditIcon/>,
    },
  },

  icons: {
    phone: {
      number:'940-315-6490',
      text: 'Phone',
      icon: <PhoneIphoneIcon />,
    },
    email: {
      email:'stefaniepires91@gmail.com',
      text: 'Email',
      icon: <EmailIcon/>,
    }
  },

  skills1: [
    {
      title: 'HTML5'
    },
    {
      title: 'CSS3'
    },
    {
      title: 'Javascript'
    },
    {
      title: 'JQuery'
    },
    {
      title: 'Node Js'
    },
    {
      title: 'MySQL'
    },
    {
      title: 'Angular'
    },
    {
      title: 'Github'
    },
    {
      title: 'SCSS'
    },
    {
      title: 'GraphQl'
    }
  ],

  skills2: [
    {
      title: 'MongoDB'
    },
    {
      title: 'Express'
    },
    {
      title: 'Handelbars.js'
    },
    {
      title: 'ReactJS'
    },
    {
      title: 'Material-UI'
    },
    {
      title: 'Bootstrap'
    },
    {
      title: 'C#'
    },
    {
      title: '.Net Framework'
    },
    {
      title: 'Azure'
    },
    {
      title: 'Apollo Server'
    }

  ],
  
  experiences: [
    {
      //updated
      title: 'Full Stack Developer - Zilis',
      date: 'April 2021 - Current',
      description: 'Collaborate with team members to build responsive applications using React and Angular frameworks, Node and C#/.Net backends, SQL and GraphQL. Add new features to our app within the Angular and React frameworks. Ensure the technical feasibility of UI/UX designs. Optimize application for maximum speed and scalability'
    
  },
    {
      
      title: 'Order Fulfillment Specialist - FusionPKG',
      date: 'December 2018 - November 2020',
      description: 'Promoted 11 months into the role. Received praise from clients for exceptional customer service, response time, and quality of work.Recognized for working swiftly with minimal errors.'
    
  }
  ],

  education: [
    {
      
        title: 'Full Stack Development Certificate - University of Pennsylvania',
        date: 'Graduated April 2021',
        description: 'A 24-week intensive program focused on gaining technical programming skills in HTML5, CSS3, Javascript, JQuery, Bootstrap, Firebase, Node Js, MySQL, MongoDB, Express, Handelbars.js & ReactJS.'
      
    },
    {
      
      title: 'B.A. Anthropology - University of North Texas',
      date: 'Graduated 2013',
      description: ''
    
  }
  ],

  projects1: [
    {
      title: 'Meme-ories',
      url: 'https://m3m3-ories.herokuapp.com/',
      githubLink: 'https://github.com/stefaniepires/meme-ories',
      img: memeOries
    },
    {
      title: 'MVC Tech Blog',
      url: 'https://tech-blog-sp.herokuapp.com/',
      githubLink: 'https://github.com/stefaniepires/mvc-tech-blog',
      img: techBlog
    },
    {
      title: 'Taskmaster Pro',
      url: 'https://stefaniepires.github.io/taskmaster-pro/',
      githubLink: 'https://github.com/stefaniepires/taskmaster-pro',
      img: taskmaster
    },
    {
      title: 'Deck the Halls',
      url: 'https://stefaniepires.github.io/deck-the-halls/',
      githubLink: 'https://github.com/stefaniepires/deck-the-halls',
      img: deckHalls
    },
    {
      title: 'Social Network API',
      url: 'https://github.com/stefaniepires/social-network-api',
      githubLink: 'https://github.com/stefaniepires/social-network-api',
      img: social
    }
  ],

  projects2: [
    {
      title: 'Fridge Friend',
      url: 'https://fridg3-fri3nd.herokuapp.com/',
      githubLink: 'https://github.com/stefaniepires/fridgefriend',
      img: fridgeFriend
    },
    {
      title: 'Weather Dashboard',
      url: 'https://stefaniepires.github.io/weather-dashboard/',
      githubLink: 'https://github.com/stefaniepires/weather-dashboard',
      img: weatherDash
    },
    {
      title: 'Nomader Where',
      url: 'https://evan-wer.github.io/Travel-Buddy/',
      githubLink: 'https://github.com/stefaniepires/Nomader-Where',
      img: nomader
    },
    {
      title: 'PWA Project: Food Festival',
      url: 'https://stefaniepires.github.io/food-festival/',
      githubLink: 'https://github.com/stefaniepires/food-festival',
      img: pwa
    },
    {
      title: 'Budget Tracker',
      url: 'https://budget-tracker-sp.herokuapp.com/',
      githubLink: 'https://github.com/stefaniepires/budget-tracker',
      img: budgetTracker
    }
  ]



};