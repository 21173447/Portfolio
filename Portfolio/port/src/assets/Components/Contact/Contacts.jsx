import React from 'react';
import './Contact.css';
import { MdEmail } from "react-icons/md";
import { SiMessenger } from "react-icons/si";
import { IoLogoWhatsapp } from "react-icons/io5";

const Contacts = () => {
  return (
    <section id='Contacts'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className='contact__option'> 
            <MdEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>tshegofatsononyane009@gmail.com</h5>
            <a href="mailto:tshegofatsononyane009@gmail.com" target='_blank' rel='noopener noreferrer'>Send a Message</a>
          </article>

          <article className='contact__option'>
            <SiMessenger className='contact__option-icon'/>
            <h4>Messenger</h4>
            <h5>facebook</h5>
            <a href="https://m.me/tshego" target='_blank' rel='noopener noreferrer'>Send a Message</a>
          </article>

          <article className='contact__option'>
            <IoLogoWhatsapp className='contact__option-icon'/>
            <h4>WhatsApp</h4>
            <h5>+27 81 503 8545</h5>
            <a href="https://api.whatsapp.com/send?phone=+27815038545" target='_blank' rel='noopener noreferrer'>Send a Message</a>
          </article>
        </div>

        <form action="">
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name="message" rows="7" placeholder='Your message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  );
}

export default Contacts;
