import { useState } from 'react';
import './App.css';

import Perfil from './components/Perfil';
import ReposList from './components/ReposList';
// import Formulario from './components/Formulario';


function App() {
  const [nomeUsuario, setNomeUsuario] = useState([]);

  return (
    <div className="container">
      <div className="search-container">
        <input 
          type="text" 
          placeholder="Digite o nome do usuário"
          onBlur={(e) => setNomeUsuario(e.target.value)}
          className="search-input"
        />
      </div>

      {nomeUsuario.length > 4 &&(
        <div className="content">
          <Perfil nomeUsuario = {nomeUsuario}/>
          <ReposList nomeUsuario = {nomeUsuario} />
        </div>
      )}
    </div>
  )
}

export default App
