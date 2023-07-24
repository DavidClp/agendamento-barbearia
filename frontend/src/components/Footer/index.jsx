import React from 'react'
import './footer.scss'

import{BsInstagram, BsWhatsapp,BsFacebook} from 'react-icons/bs'
import {logo} from '../../assets'

const Footer = () => {
  return (
    <footer>
      <div className='principal'>
        <div className="logo">
          <img src={logo} alt="Logo Mr Barber" />
          <h2>MR BARBER</h2>
        </div>

        <div className="text">
          <p>Faça nos uma visita e conheça uma nova experiencia sobre Barbearia</p>
          <div className="icons">
            <BsInstagram className='icon'/>
            <BsFacebook className='icon'/>
            <BsWhatsapp className='icon'/>
          </div>
        </div>
      </div>

      <div className="copyright">
        <p>Copyright 2023 - Mr Barber. Todos os direitos reservados. Desenvolvido por <a href="https://nomadetech.online" target='blank'>David Clipel</a></p>
      </div>
    </footer>
  )
}

export default Footer