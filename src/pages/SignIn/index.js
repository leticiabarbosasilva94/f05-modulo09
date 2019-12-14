import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../../assets/images/logo.svg';

export default function Dashboard() {
  return (
    <>
      <img src={logo} alt="GoBarber" />

      <form>
        <input type="email" placeholder="Seu e-mail" />
        <input type="password" placeholder="Sua senha" />

        <button type="submit">acessar</button>
        <Link to="/register">Criar conta gratuita</Link>
      </form>
    </>
  );
}
