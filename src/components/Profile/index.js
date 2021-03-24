import React from 'react'
import headshot from '../../assets/headshot.png';
import LocationOnIcon from '@material-ui/icons/LocationOn';

const Profile = () => {
  return (
    <div>
      <center>
      <img src={headshot} alt="Headshot" width="200"/>
      <h2>Stefanie Pires</h2>
      <p><em>Full Stack Developer</em></p>
      <br/>
      <p>
      Motivated and creative Full Stack Developer passionate about creating user-friendly software.
      </p>
      <br/>
      <p><LocationOnIcon/>Dallas-Ft. Worth, TX</p>
      </center>
    </div>
  )
}

export default Profile
