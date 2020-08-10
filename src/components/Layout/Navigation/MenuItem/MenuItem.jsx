import React from 'react';
import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/core/styles';
import { Link } from '@material-ui/core';

const useStyles = makeStyles({
  root: (props) => ({
    textTransform: 'uppercase',
    '&:hover a': {
      opacity: 0,
    },
    '&:hover::before': {
      position: 'absolute',
      fontWeight: 800,
      content: `"${props.text}"`,
    },
  }),
});

const MenuItem = ({ link, text }) => {
  const classes = useStyles({ link, text });

  return (
    <li className={classes.root} data-text="Home">
      <Link href={link} underline="none" color="inherit">{text}</Link>
    </li>
  );
};

MenuItem.propTypes = {
  link: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default MenuItem;
