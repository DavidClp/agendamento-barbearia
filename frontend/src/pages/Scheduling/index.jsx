import React, {useState} from 'react'
import './scheduling.scss'
import {SchedulingMenu, FormLogin, FormCadastro, SessionScheduling, MyAppointments} from '../../components'

const Scheduling = () => {

  const [activeContainer, setactiveContainer] = useState('formLogin');

  const handleContainerChange = (containerName) => {
    setactiveContainer(containerName);
  };

  return (
    <section className='scheduling'>

      {activeContainer === 'menu' && <SchedulingMenu changeContainer={handleContainerChange}/>}
      {activeContainer === 'formLogin' && <FormLogin changeContainer={handleContainerChange}/>}
      {activeContainer === 'Cadastro' && <FormCadastro changeContainer={handleContainerChange}/>}
      {activeContainer === 'SessionScheduling' && <SessionScheduling changeContainer={handleContainerChange}/>}
      {activeContainer === 'appointments' && <MyAppointments changeContainer={handleContainerChange}/>}
    </section>
  )
}

export default Scheduling