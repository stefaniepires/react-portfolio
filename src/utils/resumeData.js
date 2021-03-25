import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import YouTubeIcon from '@material-ui/icons/YouTube';
import PinterestIcon from '@material-ui/icons/Pinterest';
import RedditIcon from '@material-ui/icons/Reddit';

import PhoneIphoneIcon from '@material-ui/icons/PhoneIphone';
import EmailIcon from '@material-ui/icons/Email';


export default {
  name: 'Stefanie Pires',
  title: 'Full Stack Developer',
  description: 'Motivated and creative Full Stack Developer passionate about creating user-friendly software.',
  location: ' Dallas-Ft. Worth, TX',

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
  }
}