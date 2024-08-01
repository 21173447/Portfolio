import React from 'react'
import '../Projects/projects.css'
import pic1 from '../../Port/1.png'
import pic2 from '../../Port/md.jpg'
import pic3 from '../../Port/img.png'
import pic4 from '../../Port/DZ.jpg'




const Project = () => {
  return (
    <section id='project'>

      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <article className=' my_work'>

        <img className='work' src={pic1} alt="" />
        <img className='work'src={pic2} alt="" />
        <img  className='work' src={pic3} alt="" />
        <img  className='work'src={pic4} alt="" />

      </article>

    </section>
  )
}

export default Project
