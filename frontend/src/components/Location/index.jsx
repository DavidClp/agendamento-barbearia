import React from 'react'
import './location.scss'
import {location} from '../../assets'

import {GiFrozenOrb} from 'react-icons/gi'
import {PiSoccerBallFill} from 'react-icons/pi'

const Location = () => {
  return (
    <section id='location'>
            
        <div className="principal">
            <p>Viaduto do Cha - 15 - Downtown</p>
            <h2>COMO CHEGAR</h2>
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1828.7861867101885!2d-46.6370453!3d-23.5478781!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5968aaa1ad71%3A0xd92b6ce64c7cb535!2sPrefeitura%20Municipal%20de%20S%C3%A3o%20Paulo!5e0!3m2!1spt-BR!2sbr!4v1687965847537!5m2!1spt-BR!2sbr" width="760" height="400" oading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>            
        </div>

        <div className="extras">
            <img src={location} alt="Foto Barbearia" className='barberShop'/>
            <h3>CONVENIÊNCIA</h3>
            <ul className='listConv'>
                <li><GiFrozenOrb className='icon'/> Ar-Condicionado</li>
                <li><PiSoccerBallFill className='icon'/> Futebool Ao Vivo</li>
            </ul>
            
        </div>
    </section>
  )
}

export default Location