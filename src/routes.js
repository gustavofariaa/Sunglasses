import React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import HomeMobile from './pages/HomeMobile';

export default ({isWeb}) => (
  <HashRouter basename={process.env.PUBLIC_URL}>
    <Switch>
      <Route exact path="/" component={isWeb ? Home : HomeMobile} />
    </Switch>
  </HashRouter>
);
