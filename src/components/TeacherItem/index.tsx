import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

function TeacherItem() {
  return (
    <article className="teacher-item">
      <header>
        <img src="https://avatars3.githubusercontent.com/u/28894474?s=400&u=2578374c7853fc795acc63e3c93080fd74adc60f&v=4" alt="Foto de Perfil"/>
        <div>
          <strong>Gilvan Henrique</strong>
          <span>Física</span>
        </div>
      </header>

      <p>
        Olá! Eu me chamo Gilvan Henrique e sou professor de física.
        <br/>
        Prezo sempre por uma aula dinâmica, usando recursos modernos e tecnológicos
        para tornar a sala de aula um lugar mais atrativo e interessante para os alunos.
      </p>

      <footer>
        <p>
          Preço/hora
          <strong>R$60,00</strong>
        </p>
        <button>
          <img src={whatsappIcon} alt="Whatsapp do professor" />
          Entrar em contato
        </button>
      </footer>
    </article>
  )
}

export default TeacherItem;