import React from 'react';
import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/core/styles';
import { NavLink } from 'react-router-dom';
import { Link } from '@material-ui/core';

const useStyles = makeStyles({
  root: (props) => ({
    width: '150px',
    textTransform: 'uppercase',
    fontSize: '18px',
    textAlign: 'center',
    '& > a': {
      '&:first-child': {
        marginLeft: 0,
      },
      margin: '0 25px',
      textDecoration: 'none',
      color: 'inherit',
      '&.active': {
        color: 'inherit',
        fontWeight: 800,
        content: `"${props.text}"`,
      },
    },
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

const MenuItem = ({
  link, text, exact, useLink, ...linkProps
}) => {
  const classes = useStyles({ link, text });

  return (
    <li className={classes.root}>
      {useLink ? (
        <Link href={link} {...linkProps}>{text}</Link>
      ) : (
        <NavLink to={link} exact={exact} {...linkProps}>{text}</NavLink>
      )}
    </li>
  );
};

MenuItem.propTypes = {
  exact: PropTypes.bool,
  link: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  useLink: PropTypes.bool,
  // eslint-disable-next-line react/forbid-prop-types
  linkProps: PropTypes.object,
};

MenuItem.defaultProps = {
  exact: false,
  useLink: false,
  linkProps: {},
};

export default MenuItem;
