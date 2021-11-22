import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/auth';
import './signup.css';
import logo from '../../assets/logo.png';

function Signup() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { signUp, loadingAuth } = useContext(AuthContext);

  function handleSubmit(e) {
    e.preventDefault();
    if (nome !== '' && email !== '' && password !== '') {
      signUp(email, password, nome);
    }
  }
  return (
    <div className="container">
      <div className="Login">
        <div className="Login-area">
          <img src={logo} alt="Sistema Logo" />
        </div>
        <form onSubmit={handleSubmit}>
          <h1>Cadastrar uma conta</h1>
          <input
            type="text"
            placeholder="Digite seu nome"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />
          <input
            type="text"
            placeholder="email@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Digite sua senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">
            {loadingAuth ? 'Carregando...' : 'Cadastrar'}
          </button>
        </form>
        <Link to="/"> Já possui uma conta ?</Link>
      </div>
    </div>
  );
}

export default Signup;
