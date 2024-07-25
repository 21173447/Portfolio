import React from 'react';
import './porforlio.css'; 
import IMG1 from '../../../assets/html.png';
import IMG2 from '../../../assets/java.png';
import IMG3 from '../../../assets/js.png';
import IMG4 from '../../../assets/c-sharp.png';
import IMG5 from '../../../assets/kotlin.png';
import IMG6 from '../../../assets/science.png';




const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>What i learned</h5>
      <h2>Languages</h2>

      <div className="container portfolio__container">
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <h3></h3>
            <img src={IMG1} alt="Portfolio Item 1" />
          </div>
          
        </article>

        
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <h3></h3>
            <img src={IMG2} alt="Portfolio Item 1" />
          </div>
          
        </article>

        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <h3></h3>
            <img src={IMG3} alt="Portfolio Item 1" />
          </div>

                  
        </article>
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <h3></h3>
            <img src={IMG4} alt="Portfolio Item 1" />
          </div>
          
        </article>
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <h3></h3>
            <img src={IMG5} alt="Portfolio Item 1" />
          </div>
          
        </article>
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <h3></h3>
            <img src={IMG6} alt="Portfolio Item 1" />
          </div>
          
        </article>




       
        
      </div>
    </section>
  );
}

export default Portfolio;
