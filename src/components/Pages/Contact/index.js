import React from 'react'
import './Contact.css';
import CustomButton from '../../Button';

const Contact = () => {
  return (
    <section className='contact-page'>
      <h1 className='contact-header' data-testid="h1tag">get in contact</h1>
      <form id="contact-form">
        <div className='contact-div'>
          <label className="contact-label" htmlFor="name">name:</label><br/>
          <input type="text" name="name" />
        </div>
        <div className='contact-div'>
          <label className="contact-label" htmlFor="email">email:</label><br/>
          <input type="email" name="email"/>
        </div>
        <div className='contact-div'>
          <label className="contact-label" htmlFor="message">message:</label><br/>
          <textarea name="message" rows="5" />
        </div>
        <div className='contact-div'>
        <CustomButton className="profile-btn" text={'Submit'}/>
        </div>
      </form>
      <br/>
      <h1 className='contact-header' data-testid="h1tag">location</h1>
      map here
    </section>
  )
}

export default Contact
