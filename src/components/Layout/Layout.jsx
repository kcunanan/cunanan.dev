import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import { Container } from '@material-ui/core';

import Navigation from '_/components/Layout/Navigation/Navigation';
import RouteNode from '_/components/RouteNode/RouteNode';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100%',
    backgroundColor: theme.palette.primary.light,
  },
}));

export default () => {
  const classes = useStyles();

  return (
    <Container fixed className={classes.root}>
      <Navigation />
      <RouteNode />
    </Container>
  );
};
