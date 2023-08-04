import React, {useState} from 'react'

const FormCadastro = ({changeContainer}) => {
  //função responsavel mudar de container
  const handleClick = (container) =>{
    changeContainer(container)
  }

  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    senha: '',
  });

  const handleChange = (event) => {
    const {name, value} = event.target;
    setFormData({...formData, [name]: value});
  }

  const handleSubmit = (event) =>{
    event.preventDefault();
    checkInputErrors(formData);
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

  const sendToAPI = async (data) => {
    try{
      const response = await fetch('http://localhost:8080/api/usuarios',{
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
      handleClick('menu')
    } catch(error){
      window.Error();
      const err = `Erro ao enviar dados para a API: ${error}`
      window.alert(err)
    }
  }

  return (
    <div className="containerScheduling">
        <span onClick={() => handleClick('formLogin')} className='.btnVoltar'>VOLTAR</span>
        <h3 className='title titleForm'>Cadastre-se</h3>

        <form onSubmit={handleSubmit}>
            <div className="boxInput">
                <label htmlFor="nome">NOME</label>
                <input type="text" placeholder='Jonh Doe' name='nome' className='inputCadastro' value={formData.nome} onChange={handleChange}/>
            </div>
            <div className="boxInput">
                <label htmlFor="email">E-MAIL</label>
                <input type="email" placeholder='jonhdoe@gmail.com' name='email' className='inputCadastro' value={formData.email} onChange={handleChange}/>
            </div>
            <div className="boxInput">
                <label htmlFor="telefone">TELEFONE</label>
                <input type="telefone" placeholder='(69) 992733353' name='telefone' className='inputCadastro' value={formData.telefone} onChange={handleChange}/>
            </div>
            <div className="boxInput">
                <label htmlFor="senha">SENHA</label>
                <input type="text" name='senha' className='inputCadastro' value={formData.senha} onChange={handleChange}/>
            </div>
 
          {/* <button className='btn btnPrimary' onClick={() => handleClick('menu')}>SALVAR</button> */}
          <button className='btn btnPrimary' type='submit'>SALVAR</button>
        </form>
    </div>
  )
}

export default FormCadastro