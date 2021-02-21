import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

import {
  Container, Grid, List, ListItem, ListItemIcon, ListItemText, Typography,
} from '@material-ui/core';

import InstagramIcon from '@material-ui/icons/Instagram';
import GitHubIcon from '@material-ui/icons/GitHub';
import MailOutlineIcon from '@material-ui/icons/MailOutline';

import SectionHeading from '../../Common/SectionHeading/SectionHeading';

export type TFooterProps = {
  heading?: string;
  paragraph?: string;
  email?: string;
  github?: string;
  instagram?: string;
}

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
  link: {
    '& > a': {
      color: theme.palette.primary.light,
      textDecoration: 'none',
    },
    '& > a:hover': {
      textDecoration: 'underline',
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
  powered: {
    display: 'flex',
    fontFamily: '"Merriweather Sans", sans-serif',
    justifyContent: 'center',
    alignItems: 'center',
    fontWeight: 800,
    '& img': {
      height: '75px',
      marginRight: '1rem',
    },
  },
  poweredByLink: {
    color: 'inherit',
    marginLeft: '5px',
  },
}));

const Footer = ({
  heading = '',
  paragraph = '',
  email = '',
  github = '',
  instagram = '',
}: TFooterProps) => {
  console.log(heading, paragraph);
  const classes = useStyles();

  return (
    <div id="contact" className={classes.root}>
      <Container fixed component="footer">
        <SectionHeading color="primary" text={heading || ''} />
        <Grid container spacing={8}>
          <Grid item sm={8}>
            <Typography className={classes.body1}>
              {paragraph}
            </Typography>
          </Grid>
          <Grid item sm={4}>
            <List className={classes.list}>
              <ListItem>
                <ListItemIcon className={classes.icon}>
                  <MailOutlineIcon color="primary" />
                </ListItemIcon>
                <ListItemText disableTypography primary={email} />
              </ListItem>
              {github && (
              <ListItem>
                <ListItemIcon className={classes.icon}>
                  <GitHubIcon color="primary" />
                </ListItemIcon>
                <ListItemText
                  className={classes.link}
                  disableTypography
                  primary={(
                    <a target="_blank" rel="noreferrer" href={`https://github.com/${github}`}>
                      {github}
                    </a>
                )}
                />
              </ListItem>
              )}
              {instagram && (
              <ListItem>
                <ListItemIcon className={classes.icon}>
                  <InstagramIcon color="primary" />
                </ListItemIcon>
                <ListItemText
                  className={classes.link}
                  disableTypography
                  primary={(
                    <a target="_blank" rel="noreferrer" href={`https://instagram.com/${instagram}`}>
                      {instagram}
                    </a>
                )}
                />
              </ListItem>
              )}
            </List>
          </Grid>
        </Grid>
        <div className={classes.powered}>
          <a href="https://github.com/ukiyodigital/float" target="_blank" rel="noreferrer">
            <img
              src="https://float-static.s3-us-west-2.amazonaws.com/media/float-logo.png"
              alt="Powered by Float"
            />
          </a>
          {'Powered by '}
          <a className={classes.poweredByLink} href="https://github.com/ukiyodigital/float" target="_blank" rel="noreferrer">Float</a>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
