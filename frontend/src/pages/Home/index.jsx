import React from 'react'
import './home.scss'
/* import {Link} from 'react-router-dom' */
import {About, Services, Location, Contact} from '../../components'
import {home, bemvindo} from '../../assets'

const Home = () => {
  return (
    <>
    <section id='home'>
      <img src={home} alt="" className='imgFundo'/>

      <div className="container">
        <img src={bemvindo} className='imgBemVindo' alt="texto de bem vindo a uma nova experiencia de barbearia" />
        {/* <Link to="/scheduling">Agende</Link> */}
      </div>

    </section>

    <About/>
    <Services/>
    <Location/>
    <Contact/>
    </>
  )
}

export default Home