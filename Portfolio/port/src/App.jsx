import React from 'react'
import Header from './assets/Components/Header/Header'
import Nav from './assets/Components/Nav/Nav'
import Abt from './assets/Components/Abou/Abt'
import Portfolio from './assets/Components/Portfolio/Portfolio'
import Contacts from './assets/Components/Contact/Contacts'
import Footer from './assets/Components/Footer/Footer'


const App = () => {
  return (
    <div>
       <Header/>
       <Nav/>
       <Abt/>
       <Portfolio/>
       <Contacts/>
       <Footer/>
    </div>
  )
}

export default App
