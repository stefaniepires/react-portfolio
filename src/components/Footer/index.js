import React from 'react'
import LinkedinIcon from '@material-ui/icons/LinkedIn'
import GithubIcon from '@material-ui/icons/GitHub'


const Footer = () => {
  return (
    <div>
      <br/>
  <a data-testid="link" href="https://www.linkedin.com/in/stefanietinsley/">
  <LinkedinIcon/>
  </a>
  <a data-testid="link" href="https://github.com/stefaniepires/">
    <GithubIcon/>
  </a>
  <p>Stefanie Pires 2021 &copy;</p> 
    </div>
  )
}

export default Footer

