import React from 'react'
import CV from '../../../assets/cv.pdf'

const CTAS = () => {
  return (
    <div className='ctas'>
        <a href={CV} download className='btn'>Download CV</a>
        <a href="" className='btn btn-primary'>Lets's Talk</a>

      
    </div>
  )
}

export default CTAS
