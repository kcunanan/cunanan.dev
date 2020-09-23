import React from 'react';

import { Container } from '@material-ui/core';
import { Switch, Route } from 'react-router-dom';
import Navigation from '_/components/Layout/Navigation/Navigation';

import { navigationRoutes } from '_/routing/routes';

const HeaderNode = () => (
  <Switch>
    {navigationRoutes.map(
      (route) => (
        <Route
          key={route.name}
          path={route.path}
          exact={route.exact}
          name={route.name}
          render={() => {
            const Component = route.component;
            return (
              <Component
                navigation={<Navigation />}
              />
            );
          }}
        />
      ),
    )}
    <Route
      exact
      path="/"
      render={() => (
        <Container>
          <Navigation />
        </Container>
      )}
    />
  </Switch>
);

export default HeaderNode;
