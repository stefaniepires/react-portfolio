import React from 'react'

import LinkedinIcon from '@material-ui/icons/LinkedIn'
import GithubIcon from '@material-ui/icons/GitHub'
import EmailIcon from '@material-ui/icons/Email';
import PhoneIphoneIcon from '@material-ui/icons/PhoneIphone';
import Divider from '@material-ui/core/Divider'

import './Footer.css';

const Footer = () => {
  return (
    <div>
      <center>
      <br/> <br/> <br/> <br/>
      <Divider/><br/>
      <a className="icons" data-testid="link" href="tel:9403156490">
      <PhoneIphoneIcon className="icons"/>
      </a>

      <a className="icons" data-testid="link" href="mailto:StefaniePires91@gmail.com">
      <EmailIcon className="icons"/>
</a>
  <a className="icons" data-testid="link" href="https://www.linkedin.com/in/stefanietinsley/">
  <LinkedinIcon/>
  </a>
  <a className="icons" data-testid="link" href="https://github.com/stefaniepires/">
    <GithubIcon/>
  </a>
  <p className="footer-text">Stefanie Pires 2021 &copy;</p> 
  </center>
    </div>
  )
}

export default Footer

