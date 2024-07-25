import React from 'react'
import './footer.css'
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";


const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>Premiumportfolio</a>
      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#Abt">About</a></li>
        <li><a href="#Portfolio">Portfolio</a></li>
        <li><a href="#Contacts">Contacts</a></li>

      </ul>
      <div className="footer__socials">

        <a href="https://facebook.com" target='_blank'><FaFacebookF/></a>
        <a href="https://instagram.com" target='_blank'><FaInstagram/></a>
        <a href="https://twitter.com" target='_blank'><FaXTwitter/></a>
      
      </div>
      <div className="footer__copyright">
        <small> &copy;Premiumportfolio</small>

      </div>

    </footer>
  )
}

export default Footer
