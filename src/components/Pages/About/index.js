import React from 'react'
import './About.css';
import resumeData from '../../../utils/resumeData';
import { Container, Grid } from '@material-ui/core';
import CheckIcon from '@material-ui/icons/Check';

const About = () => {
  return (
    <div className='profile'>
      <h1 className='header_text'>about</h1><br/>
      <p className='about_text'>
      {resumeData.about}
      
      </p>
     <br/>
      <h1 className='header_text'>technologies</h1><br/>
      <div>
        <Container className='container'>
         
          <Grid container>
            <Grid item xs={12} sm={12} md={6} lg= {6}>
             <ul>
              <li>
              <CheckIcon className="check"/>{resumeData.skills.one}
              </li>
              <li>
              <CheckIcon className="check"/>{resumeData.skills.two}
              </li>
              <li>
              <CheckIcon className="check"/>{resumeData.skills.three}
              </li>
              <li>
              <CheckIcon className="check"/>{resumeData.skills.four}
              </li>
              <li>
              <CheckIcon className="check"/>{resumeData.skills.five}
              </li>
              <li>
              <CheckIcon className="check"/>{resumeData.skills.six}
              </li>
              </ul>
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg= {6}>
            <ul>
              <li>
              <CheckIcon className="check"/>{resumeData.skills.seven}
              </li>
              <li>
              <CheckIcon className="check"/>{resumeData.skills.eight}
              </li>
              <li>
              <CheckIcon className="check"/>{resumeData.skills.nine}
              </li>
              <li>
              <CheckIcon className="check"/>{resumeData.skills.ten}
              </li>
              <li>
              <CheckIcon className="check"/>{resumeData.skills.eleven}
              </li>
              <li>
              <CheckIcon className="check"/>{resumeData.skills.twelve}
              </li>
              </ul>
            </Grid>
          </Grid>
          
        </Container>
       
      </div>
</div>
  )
}

export default About
