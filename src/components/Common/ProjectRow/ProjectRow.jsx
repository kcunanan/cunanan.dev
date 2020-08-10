import React from 'react';
import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/core/styles';

import {
  Grid, Link, Paper, Typography,
} from '@material-ui/core';

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
  name: {
    fontSize: '36px',
    marginBottom: '1rem',
  },
  description: {
    fontSize: '16px',
    marginBottom: '1.5rem',
  },
  tags: {
    fontSize: '18px',
    fontFamily: '"Merriweather Sans", sans-serif',
    fontWeight: 800,
  },
  link: {
    fontFamily: '"Merriweather Sans", sans-serif',
    fontWeight: 900,
    fontSize: '18px',
    [theme.breakpoints.up('sm')]: {
      position: 'absolute',
      bottom: 32,
    },
  },
}));

const ProjectRow = ({ name, description, tags }) => {
  const classes = useStyles();

  return (
    <Grid className={classes.root} container spacing={8}>
      <Grid item xs={12} sm={3}>
        <Paper className={classes.paper} />
      </Grid>
      <Grid item xs={12} sm={9}>
        <Typography className={classes.name} variant="h4">
          {name}
        </Typography>
        <Typography className={classes.description} variant="body1">
          {description}
        </Typography>
        <Typography className={classes.tags}>
          {tags.join(', ')}
        </Typography>
        <Link className={classes.link} href="/" color="secondary">Read More +</Link>
      </Grid>
    </Grid>
  );
};

ProjectRow.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string,
  tags: PropTypes.arrayOf(PropTypes.string),
};

ProjectRow.defaultProps = {
  description: '',
  tags: [],
};

export default ProjectRow;
