import React from 'react';
import'./Header.css';
import Nav from '../Nav';
import resumeData from '../../utils/resumeData'

const Header = () => {
  return (
    <header className={'header'}>
      <Nav/>
<center>
<h1 className='header-title'>{resumeData.name}</h1>
</center>

</header>
  )
}

export default Header

