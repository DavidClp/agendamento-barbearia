import React, {useState} from 'react'

const SessionScheduling = ({changeContainer}) => {
    //função responsavel mudar de container
    const handleClick = (container) =>{
        changeContainer(container)
    }

    const [formData, setFormData] = useState({
        servico: '',
        dia: '',
        hora: '',
    })

    const handleChange = (event) =>{
        const {name, value} = event.target;
        setFormData({...formData, [name]: value});
    }
    
    const handleSubmit = (event) =>{
        event.preventDefault();
        sendToAPI(formData)
    }
    
    const sendToAPI = async (data) => {
        try{
          console.log(data)
          const response = await fetch('http://localhost:8080/api/agendamentos',{
            method: 'post',
            headers:{
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
          })
    
          const dados = await response.json()
          /* handleClick('menu') */
          console.log(dados)
    
        } catch(error){
          console.error('Erro ao enviar dados para a API:', error);
        }
      }
    

  return (
    <div className='containerScheduling'>
        <span onClick={() => handleClick('menu')} className='btnVoltar'>VOLTAR</span>
       <h3 className='title'>Agende um Horário</h3>

       <form onSubmit={handleSubmit}>
        <select name="servico" id="servico" value={formData.servico} onChange={handleChange}>
            <option value="null">SELECIONE UM SERVIÇO</option>
            <option value="barba">BARBA</option>
            <option value="Corte">CORTE</option>
            <option value="Maquina">MAQUINA</option>
        </select>

        <select name="dia" id="dia" value={formData.dia} onChange={handleChange}>
            <option value="2023-07-08">8 DE JULHO | SABADO</option>
            <option value="2023-07-09">9 DE JULHO | DOMINGO</option>
            <option value="2023-07-10">10 DE JULHO | SEGUNDA-FEIRA</option>
        </select>

        <select name="hora" id="hora" value={formData.hora} onChange={handleChange}>
            <option value="null">SELECIONE UM HORÁRIO</option>
            <option value="09:30">09:30</option>
            <option value="10:00">10:00</option>
            <option value="10:30">10:30</option>
            <option value="11:00">11:00</option>
        </select>

        <button className='btn btnPrimary' type='submit'>CONFIRMAR</button>

       </form>

       <div className="alertScheduling">
        <p>Para manter a excelência em nossos serviços, considera-se atraso cliente que ultrapassar 5 minutos de tolerância.</p>
       </div>
    </div>
  )
}

export default SessionScheduling