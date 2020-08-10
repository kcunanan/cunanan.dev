import React from 'react';
import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/core/styles';
import { NavLink } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: (props) => ({
    textTransform: 'uppercase',
    fontSize: '18px',
    '& > a': {
      textDecoration: 'none',
      color: theme.palette.secondary.main,
    },
    '&:hover a': {
      opacity: 0,
    },
    '&:hover::before': {
      position: 'absolute',
      fontWeight: 800,
      content: `"${props.text}"`,
    },
    '& > a.active': {
      color: theme.palette.secondary.light,
      fontWeight: 800,
      content: `"${props.text}"`,
    },
  }),
}));

const MenuItem = ({ link, text, exact }) => {
  const classes = useStyles({ link, text });

  return (
    <li className={classes.root}>
      <NavLink to={link} exact={exact}>{text}</NavLink>
    </li>
  );
};

MenuItem.propTypes = {
  exact: PropTypes.bool,
  link: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

MenuItem.defaultProps = {
  exact: false,
};

export default MenuItem;
