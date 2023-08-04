import React from 'react'

const MyAppointments = ({changeContainer}) => {
  const handleClick = (container) =>{
    changeContainer(container)
  }

  return (
    <div className="containerScheduling">
        <div className="divSpan">
            <span onClick={() => handleClick('menu')}>VOLTAR</span>
            <span onClick={() => handleClick('menu')}>LOG OUT</span>
        </div>
        <h3 className='title'>Meus Horários</h3>
        
    </div>
  )
}

export default MyAppointments