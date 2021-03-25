import React from 'react';
import name from '../../assets/name.png';
import'./Header.css';
import Nav from '../Nav';

const Header = () => {
  return (
    <header className={'header'}>
      <Nav/>
<center><img src={name} alt="Headshot" width="350"/></center>


    </header>
  )
}

export default Header

