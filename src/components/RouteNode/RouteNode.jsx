import React from 'react';

import { Switch, Route } from 'react-router-dom';

import { routes } from '_/routing/routes';

const RouteNode = () => (
  <Switch>
    {routes.map(
      (route) => (
        <Route
          key={route.name}
          path={route.path}
          exact={route.exact}
          component={route.component}
          name={route.name}
        />
      ),
    )}
  </Switch>
);

export default RouteNode;
