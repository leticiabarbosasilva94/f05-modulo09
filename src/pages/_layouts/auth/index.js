import React from 'react';
import PropTypes from 'prop-types';

import { Wrapper } from './styled';

export default function AuthLayout({ children }) {
  return <Wrapper>{children}</Wrapper>;
}

AuthLayout.propTypes = {
  children: PropTypes.element.isRequired
};
