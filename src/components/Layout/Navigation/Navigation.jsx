import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import {
  AppBar, Hidden, IconButton, Toolbar,
} from '@material-ui/core';

import MenuItem from '_/components/Layout/Navigation/MenuItem/MenuItem';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme) => ({
  root: {
    boxShadow: theme.shadows[0],
    color: 'inherit',
    backgroundColor: 'inherit',
  },
  toolbar: {
    padding: 0,
    [theme.breakpoints.up('sm')]: {
      minHeight: '130px',
    },
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
        <Hidden smUp>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
        </Hidden>
        <Hidden xsDown>
          <ul className={classes.linksContainer}>
            <MenuItem text="Home" link="/" exact />
            <MenuItem text="Projects" link="/projects/float" />
            <MenuItem text="Contact" link="#contact" useLink />
            <MenuItem text="About" link="/#about" useLink />
            <MenuItem text="Resume" href="https://float-static.s3-us-west-2.amazonaws.com/media/Kevin_Cunanan_Resume_-_September_2020.docx" useLink />
          </ul>
        </Hidden>
        <div />
      </Toolbar>
    </AppBar>
  );
};

export default Navigation;
