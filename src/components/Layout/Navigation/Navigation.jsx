import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

import MenuItem from '_/components/Layout/Navigation/MenuItem/MenuItem';

const useStyles = makeStyles((theme) => ({
  root: {
    boxShadow: theme.shadows[0],
  },
  toolbar: {
    padding: 0,
    minHeight: '130px',
  },
  linksContainer: {
    padding: 0,
    listStyle: 'none',
    fontFamily: '"Merriweather Sans", "Helvetica"',
    display: 'flex',
    [theme.breakpoints.down('sm')]: {
      width: '55%',
    },
    [theme.breakpoints.up('md')]: {
      width: '40%',
    },
    [theme.breakpoints.up('lg')]: {
      width: '30%',
    },
  },
}));

const Navigation = () => {
  const classes = useStyles();

  return (
    <AppBar position="static" className={classes.root}>
      <Toolbar className={classes.toolbar}>
        <ul className={classes.linksContainer}>
          <MenuItem text="Home" link="/" exact />
          <MenuItem text="Projects" link="/projects" />
          <MenuItem text="Contact" link="/contact" />
          <MenuItem text="About" link="/about" />
        </ul>
        <div />
      </Toolbar>
    </AppBar>
  );
};

export default Navigation;
