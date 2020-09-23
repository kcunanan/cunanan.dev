import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import { Backdrop, Container } from '@material-ui/core';
import Lottie from 'lottie-web-react';

import { Context } from '_/store/Store';

import HeaderNode from '_/components/Layout/Navigation/HeaderNode/HeaderNode';
import RouteNode from '_/components/RouteNode/RouteNode';
import Footer from '_/components/Layout/Footer/Footer';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100%',
    backgroundColor: theme.palette.primary.light,
  },
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    backgroundColor: theme.palette.secondary.main,
  },
  container: (props) => ({
    visibility: props.loaded ? '' : 'hidden',
  }),
  lottieContainer: {
    height: '300px',
    width: '300px',
  },
}));

const defaultOptions = {
  loop: true,
  autoplay: true,
  path: 'https://assets8.lottiefiles.com/packages/lf20_cHA3rG.json',
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice',
  },
};

export default () => {
  const [{ loaded }] = React.useContext(Context);
  const classes = useStyles({ loaded });

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [loaded]);

  return (
    <div className={classes.root}>
      <Backdrop
        open={!loaded}
        transitionDuration={{
          appear: 0,
          enter: 500,
          exit: 500,
        }}
        className={classes.backdrop}
      >
        <div className={classes.lottieContainer}>
          <Lottie
            options={defaultOptions}
            height={300}
            width={300}
            isStopped={false}
            isPaused={false}
          />
        </div>
      </Backdrop>
      <div className={classes.container}>
        <HeaderNode />
        <Container fixed>
          <RouteNode />
        </Container>
        <Footer />
      </div>
    </div>
  );
};
