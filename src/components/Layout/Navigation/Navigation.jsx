import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import {
  AppBar, Hidden, IconButton, Toolbar,
} from '@material-ui/core';
import { useLocation } from 'react-router-dom';

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
  const { pathname } = useLocation();
  const [data, setData] = React.useState({});

  const url = `${ENVS.API_URL}?query=query SiteByKey($apiKey: String!, $pageSlug: String!) { pageByKey(apiKey: $apiKey, pageSlug: $pageSlug) { id name slug data } }&operationName=SiteByKey&variables={"apiKey": "uxeU8-IWdYXhm1lG_eTd6Mdfbc4", "pageSlug": "footer"}`;

  React.useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(url);
      const { data: pageData } = (await response.json()).data?.pageByKey || {};
      setData(pageData);
    };
    fetchData();
  }, [url]);

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
            <MenuItem
              text="Contact"
              useLink
              linkProps={{ href: '#contact' }}
            />
            {pathname === '/' ? (
              <MenuItem
                text="About"
                useLink
                linkProps={{
                  href: '/#about',
                }}
              />
            ) : null}
            {data.resume?.url ? (
              <MenuItem
                text="Resume"
                useLink
                linkProps={{
                  href: data.resume?.url,
                  target: '_blank',
                }}
              />
            ) : null}
          </ul>
        </Hidden>
        <div />
      </Toolbar>
    </AppBar>
  );
};

export default Navigation;
