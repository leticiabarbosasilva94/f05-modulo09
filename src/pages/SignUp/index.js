import React from 'react';
import isEmail from 'validator/lib/isEmail';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import ErrorMessage from '../../components/ErrorMessage';
import * as actions from '../../store/modules/auth/actions';

import logo from '../../assets/images/logo.svg';

export default function SignUp() {
  const dispatch = useDispatch();

  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [confirmPassword, setConfirmPassword] = React.useState('');
  const [errors, setErrors] = React.useState({});

  const handleSubmit = e => {
    e.preventDefault();
    const formErrors = {};

    if (name.length < 6) {
      formErrors.name = 'Nome precisa ter pelo menos 6 caracteres';
    }

    if (!isEmail(email)) {
      formErrors.email = 'Email inválido';
    }

    if (password.length < 6) {
      formErrors.password = 'Senha precisa ter pelo menos 6 caracteres';
    }

    if (password !== confirmPassword) {
      formErrors.password = 'Senha e confirmação de senha precisam ser iguais';
      formErrors.confirmPassword =
        'Senha e confirmação de senha precisam ser iguais';
    }

    setErrors(formErrors);
    if (Object.keys(formErrors).length > 0) return;

    dispatch(actions.signUpRequest(name, email, password, confirmPassword));
  };

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
        <ErrorMessage message={errors.name} />

        <input
          type="email"
          name="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          placeholder="Seu e-mail"
        />
        <ErrorMessage message={errors.email} />

        <input
          type="password"
          name="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          placeholder="Sua senha"
        />
        <ErrorMessage message={errors.password} />

        <input
          type="password"
          name="confirmPassword"
          value={confirmPassword}
          onChange={e => setConfirmPassword(e.target.value)}
          placeholder="Confirme sua senha"
        />
        <ErrorMessage message={errors.confirmPassword} />

        <button type="submit">Criar conta</button>
        <Link to="/">Já tenho login</Link>
      </form>
    </>
  );
}
