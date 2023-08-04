import React from 'react'

const SchedulingMenu = ({changeContainer}) => {
  const handleClick = (container) =>{
    changeContainer(container)
  }

  return (
    <div className="containerScheduling">
       <span onClick={() => handleClick('formLogin')} className='btnVoltar'>LOG OUT</span>
        <h3 className='title'>Olá, David</h3>
        <button onClick={() => handleClick('SessionScheduling')} className='btn btnPrimary'>AGENDE UM HORÁRIO</button>
        <button onClick={() => handleClick('appointments')} className='btn btnSecondary'>MEUS HORÁRIOS</button>
    </div>
  )
}

export default SchedulingMenu