import React from 'react';
import { Link } from 'react-router-dom';

import { Container, Content, Profile } from './styled';
import purple_logo from '../../assets/images/purple_logo.svg';

export default function Header() {
  return (
    <Container>
      <Content>
        <nav>
          <img src={purple_logo} alt="GoBarber" />
          <Link to="/dashboard">DASHBOARD</Link>
        </nav>

        <aside>
          <Profile>
            <div>
              <strong>Luiza</strong>
              <Link to="/profile">Meu Perfil</Link>
            </div>
            <img
              src="https://api.adorable.io/avatars/285/abott@adorable.png"
              alt="Avatar"
            />
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}
