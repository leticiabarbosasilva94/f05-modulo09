import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../../assets/images/logo.svg';

export default function SignUp() {
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <>
      <img src={logo} alt="GoBarber" />

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={name}
          onChange={e => setName(e.target.value)}
          placeholder="Nome completo"
        />
        <input
          type="email"
          name="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          placeholder="Seu e-mail"
        />
        <input
          type="password"
          name="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          placeholder="Sua senha"
        />

        <button type="submit">Criar conta</button>
        <Link to="/">Já tenho login</Link>
      </form>
    </>
  );
}
