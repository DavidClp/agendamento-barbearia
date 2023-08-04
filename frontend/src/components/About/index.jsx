import React from 'react';
import "./about.scss";
import {enfeite} from '../../assets'

const About = () => {
  return (
    <section id='about'>
        <div className='text-about'>
          <p className='textSince'>Desde 2016</p>
          <h2>MR BARBER</h2>
          <img src={enfeite} alt="enfeite" className='enfeite'/>
         {/*  <h3>Sua Melhor Barbearia!</h3> */}
          <p className='text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus fugit iure illo soluta deleniti. Ipsa facilis eligendi explicabo, quod qui nemo accusantium enim amet debitis dignissimos? Deserunt, autem? Dolores reiciendis facere voluptatibus sapiente architecto deserunt totam non tenetur porro, placeat repellendus, eligendi, eius laboriosam quos aspernatur necessitatibus cumque sequi neque!</p>
        </div>


    </section>
  )
}

export default About