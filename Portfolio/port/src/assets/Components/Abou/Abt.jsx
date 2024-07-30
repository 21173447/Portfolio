

import React from 'react';
import './abt.css'; 
import ME from '../../../assets/gradd.jpg';

const Abt = () => {
  return (
    <section id='Abt'>
      <h5>Get to Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Me" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__sec">
           

           
            

          </div>
          
          <p>
          I am a recently qualified software developer eager to get hands-on experience in the industry. With a passion for coding and a drive to learn, I am excited to start my journey in software development. Whether it's working on innovative projects, collaborating with talented teams, or solving complex problems, I am ready to dive in and make a meaningful contribution.

Join me on this exciting journey as I navigate the world of software development, hone my skills, and work towards creating impactful solutions. Let's embark on this adventure together!

            </p>

            <a href="#Contacts" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  );
}

export default Abt;
