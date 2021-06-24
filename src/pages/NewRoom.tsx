import { useAuth } from '../hooks/useAuth';

import illustrationImg from "../assets/images/illustration.svg";
import LogoImg from "../assets/images/logo.svg";

import { Button } from '../components/Button'


import { Link } from 'react-router-dom'



import '../styles/auth.scss'



export function NewRoom() {
  const { user } = useAuth();

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
        <h1>{user?.name}</h1>
        <h2>Crie uma nova sala</h2>
          <form>
            <input type="text" placeholder="Nome da Sala" />
            <Button type="submit">Criar Sala</Button>
          </form>
          <p>Quer entrar em uma sala existente? <Link to="/">Clique Aqui</Link></p>
        </div>
      </main>
    </div>
  );
}
