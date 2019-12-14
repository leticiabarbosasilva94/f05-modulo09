import styled from 'styled-components';

export const Nav = styled.nav`
  /* Only a horrible example */
  background: ${props => (props.error ? 'red' : 'blue')};
  padding: 20px;
  display: flex;
  align-items: center;

  a {
    margin: 0 10px 0;
    color: #fff;
    font-weight: bold;
    text-decoration: none;
  }
`;
