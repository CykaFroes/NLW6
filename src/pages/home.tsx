import { useHistory } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import { FormEvent, useState } from "react";
import { database } from "../services/firebase";

import illustrationImg from "../assets/images/illustration.svg";
import LogoImg from "../assets/images/logo.svg";
import googleIconImg from "../assets/images/google-icon.svg";

import { Button } from "../components/Button";

import "../styles/auth.scss";

export function Home() {
  const history = useHistory();
  const { user, signInWithGoogle } = useAuth();
  const [roomCode, setRoomCode] = useState("");

  const handleCreateRoom = async () => {
    if (!user) {
      await signInWithGoogle();
    }

    history.push("/rooms/new");
  };

  const handleJoinRoom = async (event: FormEvent) => {
    event.preventDefault();

    if (roomCode.trim() === '') {
      return;
    }

    const roomRef = await database.ref(`rooms/${roomCode}`).get();

    if (!roomRef.exists()) {
      alert('Room does not exist')
      return;
    }

    history.push(`/rooms/${roomCode}`);
  };

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
          <button className="create-room" onClick={handleCreateRoom}>
            <img src={googleIconImg} alt="Logo do Google" />
            Crie sua sala com o Google
          </button>
          <div className="separator">Ou Entre em uma sala</div>
          <form onSubmit={handleJoinRoom}>
            <input
              onChange={(event) => setRoomCode(event.target.value)}
              value={roomCode}
              type="text"
              placeholder="Digite o codigo da sala"
            />
            <Button type="submit">Entrar na Sala</Button>
          </form>
        </div>
      </main>
    </div>
  );
}
