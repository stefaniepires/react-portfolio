import React from 'react'
import LinkedinIcon from '@material-ui/icons/LinkedIn'
import GithubIcon from '@material-ui/icons/GitHub'
import EmailIcon from '@material-ui/icons/Email';
import PhoneIphoneIcon from '@material-ui/icons/PhoneIphone';
import Divider from '@material-ui/core/Divider'


const Footer = () => {
  return (
    <div>
      <center>
      <br/> <br/> <br/> <br/>
      <Divider/><br/>
      <PhoneIphoneIcon/>
      <EmailIcon/>
  <a data-testid="link" href="https://www.linkedin.com/in/stefanietinsley/">
  <LinkedinIcon/>
  </a>
  <a data-testid="link" href="https://github.com/stefaniepires/">
    <GithubIcon/>
  </a>
  <p>Stefanie Pires 2021 &copy;</p> 
  </center>
    </div>
  )
}

export default Footer

