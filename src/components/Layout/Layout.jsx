import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import { Backdrop, Container } from '@material-ui/core';
import Lottie from 'react-lottie';

import { Context } from '_/store/Store';

import Navigation from '_/components/Layout/Navigation/Navigation';
import RouteNode from '_/components/RouteNode/RouteNode';
import Footer from '_/components/Layout/Footer/Footer';

import * as loader from '_/assets/images/day-night.json';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100%',
    backgroundColor: theme.palette.primary.light,
  },
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    backgroundColor: theme.palette.secondary.main,
  },
}));

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: loader.default,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice',
  },
};

export default () => {
  const classes = useStyles();
  const [{ loading }] = React.useContext(Context);

  return (
    <div className={classes.root}>
      <Backdrop className={classes.backdrop} open={loading}>
        <Lottie
          options={defaultOptions}
          height={300}
          width={300}
          isStopped={false}
          isPaused={false}
        />
      </Backdrop>
      <Container fixed>
        <Navigation />
        <RouteNode />
      </Container>
      <Footer />
    </div>
  );
};
