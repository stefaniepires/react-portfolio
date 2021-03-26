import React from 'react'
import { Container, Grid, Card, CardHeader, CardMedia, CardContent  } from '@material-ui/core'
import './Projects.css';
import resumeData from '../../../utils/resumeData';
import GitHubIcon from '@material-ui/icons/GitHub';

const Projects= () => {
  return (
    <div className='projectPage profile'>
      <h1 className='header_text'>projects</h1><br/>
      <Container>
        <Grid container>
          <Grid item xs={12} sm={12} md={6} lg= {6} className="gridItem">
            
            {resumeData.projects1.map (proj1 => (
             
              <Card elevation={4} className='project-card'>
              <CardHeader className='card-title'
              title = {<a href={proj1.url} className='card-header'>
                {proj1.title}
                </a>}
                avatar= {
                  <a href={proj1.githubLink} className='card-avatar'>
                <GitHubIcon/>
                </a>
                }
                />
                
              <CardMedia>
              <a href={proj1.url}>
              <img src={proj1.img} alt={proj1.title} className='card-image' />
              </a>
              </CardMedia>
              <CardContent>
                
              </CardContent>
              

            
            </Card>
            
          ))}
           
          

          </Grid>
          <Grid item xs={12} sm={12} md={6} lg= {6} className="gridItem">
            
            {resumeData.projects2.map (proj2 => (
              
              <Card elevation={4} className='project-card'>
              <CardHeader className='card-title'
              title = {<a href={proj2.url} className='card-header'>
                {proj2.title}
                </a>}
                avatar= {
                  <a href={proj2.githubLink} className='card-avatar'>
                <GitHubIcon/>
                </a>
                }
                />
                
              <CardMedia>
              <a href={proj2.url}>
              <img src={proj2.img} alt={proj2.title} className='card-image' />
              </a>
              </CardMedia>
              <CardContent>
                
              </CardContent>
              

            
            </Card>
              
          ))}
           
          

          </Grid>


        </Grid>
      </Container>
    </div>
  )
}

export default Projects
