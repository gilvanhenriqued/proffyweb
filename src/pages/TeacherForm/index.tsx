import React from 'react';

import Header from '../../components/Header';
import Input from '../../components/Input';
import Textarea from '../../components/Textarea';

import warningIcon from '../../assets/images/icons/warning.svg';

import './styles.css'

function TeacherForm() {
  return (
    <div id="page-teacher-form" className="container">
      <Header
        title="Que incrível que você quer dar aulas!"
        description="O primeiro passo é preencher esse formulário de inscrição"
      />

      <main>
        <fieldset>
          <legend>Seus dados</legend>

          <Input name="name" label="Nome Completo" />
          <Input name="avatar" label="Avatar" />
          <Input name="whatsapp" label="WhatsApp" />
          <Textarea name="bio" label="Biografia" />
        </fieldset>

        <fieldset>
          <legend>Sobre a aula</legend>

          <Input name="materia" label="Matéria" />
          <Input name="cost" label="Custo de sua aula por hora" />
        </fieldset>

        <fieldset>
          <legend>Horários Disponíveis</legend>

          <Input name="name" label="Nome Completo" />
          <Input name="avatar" label="Avatar" />
        </fieldset>

        <footer>
          <p>
            <img src={warningIcon} alt="Aviso Importante"/>
            Importante! <br />
            Preencha todos os dados.
          </p>
          <button type="button">Salvar o Cadastro</button>
        </footer>
      </main>
    </div>
  );
}

export default TeacherForm;