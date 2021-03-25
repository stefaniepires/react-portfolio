import React from 'react'
import './Profile.css';
import headshot from '../../assets/headshot.png';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import GetAppIcon from '@material-ui/icons/GetApp';
import CustomButton from '../Button';
import resumeData from '../../utils/resumeData'



const Profile = () => {
  return (
    <div className='profile-area container_shadow'>
      <center>
        <div className='headshot'>
      <img src={headshot} alt="Headshot" width="200"/>
      </div>
      <div className='profileHeader'>
       <div className='name'> 
      {resumeData.name}
      </div>
      <div className='jobTitle'>
      {resumeData.title}
      <br/>
    </div>
      </div>
      <div>
      <p className='description'>
      {resumeData.description}
      </p>
      <br/>
      <p><LocationOnIcon/>{resumeData.location}</p>
      <br/>
      <CustomButton className="profile-btn" text={'Download CV'} icon= {<GetAppIcon/>}/>
      </div>
      </center>
      <br/><br/><br/><br/><br/>
    </div>
  )
}

export default Profile
