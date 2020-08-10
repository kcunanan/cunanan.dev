import React from 'react';
import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/core/styles';

import { Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: (props) => ({
    fontWeight: 900,
    fontSize: '48px',
    color: props.color === 'secondary' ? theme.palette.secondary.main : theme.palette.primary.main,
    marginBottom: '2rem',
    [theme.breakpoints.down('xs')]: {
      textAlign: 'center',
    },
  }),
}));

const SectionHeading = ({ text, color }) => {
  const classes = useStyles({ color });
  return (
    <Typography className={classes.root} variant="h2">{text}</Typography>
  );
};

SectionHeading.propTypes = {
  text: PropTypes.string.isRequired,
  color: PropTypes.oneOf(['primary', 'secondary']),
};

SectionHeading.defaultProps = {
  color: 'secondary',
};

export default SectionHeading;
