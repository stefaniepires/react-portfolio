import React from 'react'
import './Profile.css';
import headshot from '../../assets/headshot.png';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import CloudDownloadIcon from '@material-ui/icons/CloudDownload';





const Profile = () => {
  return (
    <div className='profile container_shadow'>
      <center>
        <div className='headshot'>
      <img src={headshot} alt="Headshot" width="200"/>
      </div>
      <div className='profileHeader'>
       <div className='name'> 
      Stefanie Pires
      </div>
      <div className='jobTitle'>
      
        Full Stack Developer
      <br/>
    </div>
      </div>
      <div>
      <p>
      Motivated and creative Full Stack Developer passionate about creating user-friendly software.
      </p>
      <br/>
      <p><LocationOnIcon/>Dallas-Ft. Worth, TX</p>
      <br/>
      <button>Download CV<CloudDownloadIcon/></button> 
      </div>
      </center>
    </div>
  )
}

export default Profile
