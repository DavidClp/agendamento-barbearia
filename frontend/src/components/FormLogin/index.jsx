import React from 'react'

const FormLogin = ({changeContainer}) => {

  const handleClick = (container) =>{
    changeContainer(container)
  }

  return (
    <div className="containerScheduling">
        <h3 className='title titleForm'>Acesse Sua Conta</h3>
        <form action="">
          <input type="email" placeholder='E-MAIL' className='inputLogin'/>
          <input type="password" placeholder='SENHA' className='inputLogin'/>
          <button className='btn btnPrimary' onClick={() => handleClick('menu')}>ENTRAR</button>
        </form>

        <h3 className='title titleForm'>Ou Cadastre-se</h3>
        <button className='btn btnSecondary' onClick={() => handleClick('Cadastro')}>QUERO ME CADASTRAR</button>
    </div>
  )
}

export default FormLogin