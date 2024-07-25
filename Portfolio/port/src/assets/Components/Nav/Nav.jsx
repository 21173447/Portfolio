import React from 'react'
import './nav.css'
import { FaHome } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa";
import { IoIosContact } from "react-icons/io";
import { useState } from 'react';

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (

    /* class for showing which page is currently active*/
    <nav>  
     <a href="" className={activeNav === '#'  ? 'active' : ''}><FaHome/></a>
     <a href="#Abt" onClick={() => setActiveNav('#Abt')} className={activeNav === '#Abt'  ? 'active' : ''} ><FaRegUser/></a>
     <a href="#Contacts"  onClick={() => setActiveNav('#Contacts')} className={activeNav === '#Contacts'  ? 'active' : ''} ><IoIosContact/></a>
    </nav>
    
  )
}

export default Nav
