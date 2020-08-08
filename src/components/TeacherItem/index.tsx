import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';
import api from '../../services/api';

export interface Teacher {
  id: number;
  name: string;
  avatar: string;
  bio: string;
  whatsapp: string;
  cost: number;
  subject: string;
}

interface TeacherItemProps {
  teacher: Teacher;
}

const TeacherItem: React.FC<TeacherItemProps> = ({ teacher }) => {
  const text = `Olá ${teacher.name}! Quero marcar uma aula...`

  function createNewConnection() {
    api.post('connections', {
      user_id: teacher.id,
    })
  }

  return (
    <article className="teacher-item">
      <header>
        <img src={teacher.avatar} alt="Foto de Perfil"/>
        <div>
          <strong>{teacher.name}</strong>
          <span>{teacher.subject}</span>
        </div>
      </header>

      <p>
        {teacher.bio}
      </p>

      <footer>
        <p>
          Preço/hora
          <strong>R$ {teacher.cost}</strong>
        </p>
        <a 
          onClick={createNewConnection}
          target="_blank"
          href={`https://wa.me/${teacher.whatsapp}?text=${text}`}>
          <img src={whatsappIcon} alt="Whatsapp do professor" />
          Entrar em contato
        </a>
      </footer>
    </article>
  )
}

export default TeacherItem;