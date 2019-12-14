import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Main from '../pages/Main';
import Page404 from '../pages/Page404';

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Main} />
      <Route path="*" component={Page404} />
    </Switch>
  );
}
