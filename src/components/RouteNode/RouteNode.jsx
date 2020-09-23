import React from 'react';

import { Switch, Route, useLocation } from 'react-router-dom';

import { initialState, Context } from '_/store/Store';

import { routes } from '_/routing/routes';

const RouteNode = () => {
  const location = useLocation();
  const [{ pathname }, dispatch] = React.useContext(Context);

  React.useEffect(() => {
    if (pathname === location.pathname) return;
    dispatch({ type: 'RESET', payload: initialState });
    dispatch({ type: 'SET_PATHNAME', payload: location.pathname });
  }, [location, pathname, dispatch]);

  return (
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
};

export default RouteNode;
