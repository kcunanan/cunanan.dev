import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import { Container } from '@material-ui/core';

import Navigation from '_/components/Layout/Navigation/Navigation';
import RouteNode from '_/components/RouteNode/RouteNode';
import Footer from '_/components/Layout/Footer/Footer';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100%',
    backgroundColor: theme.palette.primary.light,
  },
}));

export default () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Container fixed>
        <Navigation />
        <RouteNode />
      </Container>
      <Footer />
    </div>
  );
};
