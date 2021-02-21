import React from 'react';
import { Link as RouteLink } from 'react-router-dom';
import {
  Grid, Link, Typography,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import { IProject } from '../../../interfaces';
import Markdown from '../../Markdown/Markdown';

const useStyles = makeStyles((theme) => ({
  root: {
    marginBottom: '2rem',
    position: 'relative',
    '& > div': {
      // [theme.breakpoints.up('sm')]: {
      //   padding: theme.spacing(4),
      // },
      // [theme.breakpoints.down('xs')]: {
      //   padding: theme.spacing(4),
      // },
    },
  },
  paper: {
    width: '100%',
    paddingTop: '100%',
    [theme.breakpoints.down('xs')]: {
      paddingTop: '40%',
      bottom: 32,
    },
    backgroundColor: theme.palette.secondary.main,
  },
  logoContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  name: {
    fontSize: '36px',
    marginBottom: '1rem',
  },
  description: {
    fontSize: '16px',
    marginBottom: '1.5rem',
  },
  tags: {
    fontSize: '14px',
    fontFamily: '"Merriweather Sans", sans-serif',
    fontWeight: 800,
  },
  link: {
    fontFamily: '"Merriweather Sans", sans-serif',
    fontWeight: 900,
    fontSize: '18px',
  },
}));

const ProjectRow = (project: IProject) => {
  const classes = useStyles();

  return (
    <Grid className={classes.root} container spacing={8}>
      <Grid className={classes.logoContainer} item xs={12} sm={2}>
        <img
          src={project?.logo?.url}
          alt={project?.name}
        />
      </Grid>
      <Grid item xs={12} md={10}>
        <Typography className={classes.name} variant="h4">
          {project.name}
        </Typography>
        <Typography className={classes.description} variant="body1">
          {project.headline}
        </Typography>
        <Typography className={classes.description} variant="body1">
          <Markdown source={`tldr; ${project.tldr}`} />
        </Typography>
        <Typography className={classes.tags}>
          {project.tags}
        </Typography>
        <Link component={RouteLink} className={classes.link} to={`/projects/${project.slug}`} color="secondary">Read More +</Link>
      </Grid>
    </Grid>
  );
};

export default ProjectRow;
