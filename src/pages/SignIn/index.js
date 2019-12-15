import React from 'react';
import { Link } from 'react-router-dom';
import isEmail from 'validator/lib/isEmail';
import { useDispatch } from 'react-redux';
import ErrorMessage from '../../components/ErrorMessage';
import { signInRequest } from '../../store/modules/auth/actions';

import logo from '../../assets/images/logo.svg';

export default function SignIn() {
  const dispatch = useDispatch();

  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [errors, setErrors] = React.useState({});

  const handleSubmit = e => {
    e.preventDefault();
    const formErrors = {};

    if (!isEmail(email)) {
      formErrors.email = 'Email inválido';
    }

    if (!password) {
      formErrors.password = 'Senha inválida';
    }

    setErrors(formErrors);

    if (Object.keys(formErrors).length > 0) return;

    dispatch(signInRequest(email, password));
  };

  return (
    <>
      <img src={logo} alt="GoBarber" />

      <form onSubmit={e => handleSubmit(e)}>
        <input
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          placeholder="Seu e-mail"
        />
        <ErrorMessage message={errors.email} />

        <input
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          placeholder="Sua senha"
        />
        <ErrorMessage message={errors.password} />

        <button type="submit">acessar</button>
        <Link to="/register">Criar conta gratuita</Link>
      </form>
    </>
  );
}
