import React from 'react';
import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/core/styles';

import { Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: (props) => ({
    fontWeight: 900,
    fontSize: props.size,
    color: props.color === 'secondary' ? theme.palette.secondary.main : theme.palette.primary.main,
    marginBottom: '2rem',
    [theme.breakpoints.down('xs')]: {
      textAlign: 'center',
    },
  }),
}));

const SectionHeading = ({ text, color, size }) => {
  const classes = useStyles({ color, size });
  return (
    <Typography className={classes.root} variant="h2">{text}</Typography>
  );
};

SectionHeading.propTypes = {
  text: PropTypes.string.isRequired,
  color: PropTypes.oneOf(['primary', 'secondary']),
  size: PropTypes.string,
};

SectionHeading.defaultProps = {
  color: 'secondary',
  size: '48px',
};

export default SectionHeading;
