import React from 'react'
import './contact.scss'

const Contact = () => {
  return (
    <section id='contact'>
      <h2 class="heading">Vamos <span>Conversar?</span></h2>

      <form action="https://formsubmit.co/davidclipel001@gmail.com" method="post" data-form>
          <div class="input-box">
              <input type="text" placeholder="Nome Completo" name="name" required />
              <input type="email" placeholder="Email" name="email" required />
          </div>
          <div class="input-box">
              <input type="number" placeholder="Telefone" name="telefone" required />
              <input type="text" placeholder="Assunto" name="assunto" required />
          </div>
          <textarea name="mensagem" required id="" cols="30" rows="6" placeholder="Sua Mensagem"></textarea>
          <button type="submit"  class="btn" data-button>Enviar Mensagem</button>
      </form>
    </section>
  )
}

export default Contact