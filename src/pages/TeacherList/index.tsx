import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import Header from '../../components/Header';

import './styles.css';

function TeacherList() {
  return (
    <div id="page-teacher-list" className="container">
      <Header title="Estes são os proffys disponíveis." >
        <form id="search-teachers">
          <div className="input-block">
            <label htmlFor="subject">Matéria</label>
            <input type="text" id="subject" />
          </div>

          <div className="input-block">
            <label htmlFor="week_day">Dia da semana</label>
            <input type="text" id="week_day" />
          </div>

          <div className="input-block">
            <label htmlFor="time">Horário</label>
            <input type="text" id="time" />
          </div>
        </form>
      </Header>

      <main>
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
      </main>
    </div>
  );
}

export default TeacherList;