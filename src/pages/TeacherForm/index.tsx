import React, { useState, FormEvent } from 'react';

import Header from '../../components/Header';
import Input from '../../components/Input';
import Textarea from '../../components/Textarea';
import Select from '../../components/Select';
import api from '../../services/api';

import warningIcon from '../../assets/images/icons/warning.svg';

import './styles.css'

function TeacherForm() {
  const [name, setName] = useState('');
  const [avatar, setAvatar] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [bio, setBio] = useState('');
  
  const [subject, setSubject] = useState('');
  const [cost, setCost] = useState('');

  const [scheduleItems, setScheduleItems] = useState([
    { week_day: 0, from: '', to: '' }
  ]);
  
  function addNewScheduleItem() {
    setScheduleItems([
      ...scheduleItems,
      { week_day: 0, from: '', to: '' }
    ]);

  }

  function setScheduleItemsValue(position: number, field: string, value: string) {
    const updatedScheduleItems = scheduleItems.map((scheduleItem, index) => {
      console.log(scheduleItem)
      if (index === position) {
        return { ...scheduleItem, [field]: value };
      }

      return scheduleItem;
    });

    setScheduleItems(updatedScheduleItems);
  }

  function handleCreateClass(e: FormEvent) {
    e.preventDefault();

    api.post('classes', {
      name,
      avatar,
      whatsapp,
      bio,
      subject,
      cost: Number(cost),
      schedule: scheduleItems
    }).then(() => {
      alert('Cadastro realizado com sucesso!');
    }).catch(() => {
      alert('Erro no cadastro!');
    })

  }
  
  return (
    <div id="page-teacher-form" className="container">
      <Header
        title="Que incrível que você quer dar aulas!"
        description="O primeiro passo é preencher esse formulário de inscrição"
      />

      <main>
        <form onSubmit={handleCreateClass}>

          <fieldset>
            <legend>Seus dados</legend>

            <Input 
              name="name" 
              label="Nome Completo" 
              value={name} 
              onChange={(e) => { setName(e.target.value) }} 
            />
            <Input
              name="avatar"
              label="Avatar"
              value={avatar} 
              onChange={(e) => { setAvatar(e.target.value) }}
            />
            <Input 
              name="whatsapp" 
              label="WhatsApp" 
              value={whatsapp} 
              onChange={(e) => { setWhatsapp(e.target.value) }}
            />
            <Textarea 
              name="bio" 
              label="Biografia" 
              value={bio} 
              onChange={(e) => { setBio(e.target.value) }}
            />
          </fieldset>

          <fieldset>
            <legend>Sobre a aula</legend>
            <Select 
              name="subjet" 
              label="Matéria" 
              options={[
                { value: 'Física', label: 'Física' },
                { value: 'Matemática', label: 'Matemática' },
                { value: 'Química', label: 'Química' },
                { value: 'Biologia', label: 'Biologia' },
                { value: 'História', label: 'História' },
                { value: 'Geografia', label: 'Geografia' },
              ]}
              value={subject}
              onChange={ (e)=> { setSubject(e.target.value) } }
            />
            <Input 
              name="cost" 
              label="Custo de sua aula por hora" 
              value={cost}
              onChange={ (e)=> { setCost(e.target.value) } }
            />
          </fieldset>

          <fieldset>
            <legend>
              Horários Disponíveis
              <button type="button" onClick={addNewScheduleItem}>
              + Novo horário
              </button>
            </legend>

            {scheduleItems.map((scheduleItem, index) => {
              return (
                <div key={scheduleItem.week_day} className="schedule-item">
                  <Select 
                    name="week_day" 
                    label="Dia da Semana" 
                    value={scheduleItem.week_day}
                    onChange={e => setScheduleItemsValue(index, 'week_day', e.target.value)}
                    options={[
                      { value: '0', label: 'Domingo' },
                      { value: '1', label: 'Segunda-feira' },
                      { value: '2', label: 'Terça-feira' },
                      { value: '3', label: 'Quarta-feira' },
                      { value: '4', label: 'Quinta-feira' },
                      { value: '5', label: 'Sexta-feira' },
                      { value: '6', label: 'Sábado' },
                    ]}
                  />
                  <Input
                    name="from"
                    label="Das"
                    type="time"
                    value={scheduleItem.from}
                    onChange={e => setScheduleItemsValue(index, 'from', e.target.value)}
                  />
                  <Input
                    name="to"
                    label="Até"
                    type="time"
                    value={scheduleItem.to}
                    onChange={e => setScheduleItemsValue(index, 'to', e.target.value)}
                  />
                </div>
              );
            })}
            
          </fieldset>

          <footer>
            <p>
              <img src={warningIcon} alt="Aviso Importante"/>
              Importante! <br />
              Preencha todos os dados.
            </p>
            <button type="submit">Salvar o Cadastro</button>
          </footer>
        </form>
      </main>
    </div>
  );
}

export default TeacherForm;