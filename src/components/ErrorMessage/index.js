import React from 'react';
import PropTypes from 'prop-types';
import { Error } from './styled';

export default function ErrorMessage({ message }) {
  if (message) return <Error>{message}</Error>;
  return <></>;
}

ErrorMessage.defaultProps = {
  message: ''
};

ErrorMessage.propTypes = {
  message: PropTypes.oneOfType([PropTypes.string])
};
