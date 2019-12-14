import React from 'react';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';

import { Title } from './styled';

// Saga
import * as exampleRequest from '../../store/modules/exampleModule/actions';

export default function Main() {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(exampleRequest.exampleActionRequest('HEYYYYYYYYYYY'));
  }, [dispatch]);

  toast.success('Pretty cool message!!!');
  return (
    <Title>
      Main
      <small>Test</small>
    </Title>
  );
}
