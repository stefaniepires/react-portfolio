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
             {resumeData.skills1.map (skill1 => (
               <ul>
               <li>
                 <CheckIcon className="check"/> {skill1.title}
              
               </li>
               </ul>
             ))}
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg= {6}>
             {resumeData.skills2.map (skill2 => (
               <ul>
               <li>
                 <CheckIcon className="check"/> {skill2.title}
              
               </li>
               </ul>
             ))}
            </Grid>
          </Grid>
          
        </Container>
       
      </div>
</div>
  )
}

export default About
