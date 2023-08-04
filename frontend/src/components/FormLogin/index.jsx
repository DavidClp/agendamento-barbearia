import React, {useState} from 'react'

const FormLogin = ({changeContainer}) => {
  //função responsavel mudar de container
  const handleClick = (container) =>{
    changeContainer(container)
  }

  const [formData, setFormData] = useState({
    email: '',
    senha: ''
  })

  const handleChange = (event) => {
    const {name, value} = event.target;
    setFormData({...formData, [name]: value});
  }

  const handleSubmit = (event) =>{
    event.preventDefault();
    checkInputErrors(formData)
  }

  const checkInputErrors = (data) => {
    try {
      Object.keys(data).forEach((item) =>{
        if(!data[item]){
          throw item
        }
      })
      
      sendToAPI(data)
    } catch (error) {
      const err = `O campo ${error} esta vazio!`
      window.alert(err)
    }
  }

  const sendToAPI = async (data) =>{
    try {
      const response = await fetch('http://localhost:8080/api/usuarios/login',{
        method: 'post',
        headers:{
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
      })

      if(!response.ok){
        const errorData = await response.json();
        throw new Error(errorData.mensagem)
      }

      const dados = await response.json()
      localStorage.setItem('token', dados.token)
      handleClick('menu')

    } catch (error) {
      window.Error();
      const err = `Erro ao enviar dados para a API: ${error}`
      window.alert(err)
    }
  }

  return (
    <div className="containerScheduling">
        <h3 className='title titleForm'>Acesse Sua Conta</h3>
        <form onSubmit={handleSubmit}>
          <input type="email" placeholder='E-MAIL' className='inputLogin' name='email' value={formData.email} onChange={handleChange}/>
          <input type="password" placeholder='SENHA' className='inputLogin' name='senha' value={formData.senha} onChange={handleChange}/>
          <button className='btn btnPrimary' type='submit'>ENTRAR</button>
        </form>

        <h3 className='title titleForm'>Ou Cadastre-se</h3>
        <button className='btn btnSecondary'  onClick={() => handleClick('Cadastro')}>QUERO ME CADASTRAR</button>
    </div>
  )
}

export default FormLogin