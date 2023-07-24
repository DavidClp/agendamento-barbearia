import React from 'react'
import {BsWhatsapp} from 'react-icons/bs'
import './btnWhatsApp.scss'

const BtnWhatsApp = () => {
  return (
    <div className='btnWhatsApp'>
      <a href="https://wa.me/556992733353" target='blank'>
        <BsWhatsapp className='icon'/>
      </a>
    </div>
  )
}

export default BtnWhatsApp