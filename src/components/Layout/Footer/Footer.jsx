import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

import {
  Container, Grid, List, ListItem, ListItemIcon, ListItemText, Typography,
} from '@material-ui/core';

import InstagramIcon from '@material-ui/icons/Instagram';
import GitHubIcon from '@material-ui/icons/GitHub';
import MailOutlineIcon from '@material-ui/icons/MailOutline';

import SectionHeading from '_/components/Common/SectionHeading/SectionHeading';

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: '3rem',
    paddingBottom: '3rem',
    overflow: 'auto',
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.secondary.contrastText,
    paddingLeft: theme.spacing(4),
    paddingRight: theme.spacing(4),
  },
  body1: {
    lineHeight: '47px',
    whiteSpace: 'pre-wrap',
    fontSize: '24px',
    marginBottom: '2rem',
    [theme.breakpoints.down('xs')]: {
      textAlign: 'center',
    },
  },
  list: {
    padding: 0,
    fontFamily: '"Merriweather Sans", sans-serif',
    fontWeight: 800,
    fontSize: '18px',
  },
  icon: {
    minWidth: '40px',
  },
}));

const Footer = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Container fixed component="footer">
        <SectionHeading color="primary" text="contact" />
        <Grid container spacing={8}>
          <Grid item sm={8}>
            <Typography className={classes.body1}>
              {`I’m currently looking for work! If you’d like to get in contact, feel free to shoot me an email. I have a fairly active Github, so feel free to follow my work there.\n

Whether you’re talking shop or recommending anime,\n
I’d love to get in touch.`}
            </Typography>
          </Grid>
          <Grid item sm={4}>
            <List className={classes.list}>
              <ListItem>
                <ListItemIcon className={classes.icon}>
                  <MailOutlineIcon color="primary" />
                </ListItemIcon>
                <ListItemText disableTypography primary="email" />
              </ListItem>
              <ListItem>
                <ListItemIcon className={classes.icon}>
                  <GitHubIcon color="primary" />
                </ListItemIcon>
                <ListItemText disableTypography primary="github" />
              </ListItem>
              <ListItem>
                <ListItemIcon className={classes.icon}>
                  <InstagramIcon color="primary" />
                </ListItemIcon>
                <ListItemText disableTypography primary="instagram" />
              </ListItem>
            </List>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Footer;
