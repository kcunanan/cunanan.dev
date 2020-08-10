import React from 'react';
import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/core/styles';

import { Button } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    fontFamily: '"Merriweather Sans", sans-serif',
    fontWeight: 900,
    borderRadius: 0,
    border: '5px solid',
    textTransform: 'none',
  },
});

const OutlinedButton = ({ text, ...props }) => {
  const classes = useStyles();

  return (
    <Button
      className={classes.root}
      variant="outlined"
      color="secondary"
      {...props}
    >
      {text}
    </Button>
  );
};

OutlinedButton.propTypes = {
  text: PropTypes.string.isRequired,
};

export default OutlinedButton;
