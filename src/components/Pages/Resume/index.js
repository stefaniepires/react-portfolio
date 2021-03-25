import React from 'react'
import CustomTimeline, { CustomTimelineSeparator } from '../../Timeline/';
import { Container, Grid, Typography } from '@material-ui/core';
import WorkIcon from '@material-ui/icons/Work';
import SchoolIcon from '@material-ui/icons/School';
import resumeData from '../../../utils/resumeData';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineContent from '@material-ui/lab/TimelineContent';


const Resume = () => {
  return (
    <div className='profile'>
      <Container>
      <h1 className='header_text'>resume</h1> <br/>
      <Grid container>
      <Grid item xs={12} sm={12} md={6} lg= {6}>
        <CustomTimeline title="Work History" icon={<WorkIcon/>}>
          {resumeData.experiences.map( experience=> (
            <TimelineItem>
               <CustomTimelineSeparator/>
      <TimelineContent>
       <Typography className='timeline_title'>
         {experience.title} 
         </Typography> 
       <Typography variant='caption' className='timeline_date'>
         {experience.date}
         </Typography> 
         <Typography variant='body2' className='timeline_description'>
        {experience.description} 
        </Typography> 
      </TimelineContent>
            </TimelineItem>
          ))}
        </CustomTimeline>
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg= {6}>
        <CustomTimeline title="Education" icon={<SchoolIcon/>}>
          {resumeData.education.map( edu => (
            <TimelineItem>
               <CustomTimelineSeparator/>
      <TimelineContent>
       <Typography className='timeline_title'>
         {edu.title} 
         </Typography> 
       <Typography variant='caption' className='timeline_date'>
         {edu.date}
         </Typography> 
         <Typography variant='body2' className='timeline_description'>
        {edu.description} 
        </Typography> 
      </TimelineContent>
            </TimelineItem>
          ))}
        </CustomTimeline>



        </Grid>
        </Grid>
      </Container>
    </div>
  )
}

export default Resume
