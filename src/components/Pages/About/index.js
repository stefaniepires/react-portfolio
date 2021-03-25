import React from 'react'
import './About.css';
import resumeData from '../../../utils/resumeData'

const About = () => {
  return (
    <div className='profile'>
      <h1 className='header_text'>about</h1><br/>
      <p className='about_text'>
      {resumeData.about}
      {resumeData.about}
      </p>
     <br/>
      <h1 className='header_text'>technologies</h1><br/>
      <p>ICONS GO HERE</p>
    </div>
  )
}

export default About
