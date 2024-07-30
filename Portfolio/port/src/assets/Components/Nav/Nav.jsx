import React from 'react'
import './nav.css'
import { useState } from 'react';

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (


    /* class for showing which page is currently active*/
    <nav >  
     <a href="" className={activeNav === '#'  ? 'active' : ''}>Home</a>
     <a href="#Abt" onClick={() => setActiveNav('#Abt')} className={activeNav === '#Abt'  ? 'active' : ''} >About</a>
     <a href="#Portfolio" onClick={() => setActiveNav('#Portfolio')} className={activeNav === '#Portfolio' ? 'active' : ''}>Portfolio</a>
     <a href="#Contacts"  onClick={() => setActiveNav('#Contacts')} className={activeNav === '#Contacts'  ? 'active' : ''} >Contact</a>

    </nav> 
  )
}

export default Nav
