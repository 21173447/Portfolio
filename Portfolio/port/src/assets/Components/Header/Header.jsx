import React from 'react'
import './header.css'
import CTAS from './CTAS'
import ME from '../../../assets/IMG.png'
import HeaderSocials from './HeaderSocials'
import '../Nav/Nav'


const Header = () => {
  return (

    <header>
      
      <div className="container header__container">
      <h1 className='name__sec'> <span>Tshegofatso</span><span>Mgiba|</span></h1>
      <h5 className='text-light'>Front-End-Developer</h5>
       
       
        <CTAS />
        <HeaderSocials />


        <div className="me">
          <img className='pic'src={ME} alt="me"/>
        </div>


       
        <a href="#conatct" className='scroll_down'>Scroll Down</a>

      </div>

    </header>
  )
}

export default Header
