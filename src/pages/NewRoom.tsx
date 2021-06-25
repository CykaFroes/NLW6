import { useAuth } from '../hooks/useAuth';
import { FormEvent, useState } from 'react';
import { database } from '../services/firebase';

import illustrationImg from "../assets/images/illustration.svg";

import LogoImg from "../assets/images/logo.svg";



import { Button } from '../components/Button'


import { Link, useHistory } from 'react-router-dom'



import '../styles/auth.scss'






export function NewRoom() {
  const { user } = useAuth();
  const history = useHistory();
  const [newRoom, setNewRoom] = useState('')

  const handleCreateRoom = async (event : FormEvent) => {
    event.preventDefault()
    

    if (newRoom.trim() === '') {
      return;
    }

    const roomRef = database.ref('rooms');

    const firebaseRoom = await roomRef.push({
      title: newRoom,
      authorId: user?.id
    });

    history.push(`/rooms/${firebaseRoom.key}`)

  }

  return (
    <div id="page-auth">
      <aside>
        <img
          src={illustrationImg}
          alt="Illustração simbolizando perguntas e respostas"
        />
        <strong>Crie Salas de Q&amp;A ao-vivo</strong>
        <p>Tire as duvidas da sua audiencia em tempo real</p>
      </aside>
      <main>
        <div className="main-content">
        <img src={LogoImg} alt="Let Me Ask" />
        <h2>Crie uma nova sala</h2>
          <form onSubmit={handleCreateRoom}>
            <input type="text" placeholder="Nome da Sala" onChange={(event) => setNewRoom(event.target.value)} value={newRoom}/>
            <Button type="submit">Criar Sala</Button>
          </form>
          <p>Quer entrar em uma sala existente? <Link to="/">Clique Aqui</Link></p>
        </div>
      </main>
    </div>
  );
}
