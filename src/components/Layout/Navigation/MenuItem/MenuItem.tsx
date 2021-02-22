import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import { NavLink } from 'react-router-dom';
import { Link, Theme } from '@material-ui/core';

export type TMenuItemProps = {
  text: string;
  link?: string;
  exact?: boolean;
  useLink?: boolean;
  linkProps?: any;
};

const useStyles = makeStyles<Theme, Pick<TMenuItemProps, 'text'>>({
  root: ({ text }) => ({
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
        content: `"${text}"`,
      },
    },
    '&:hover a': {
      opacity: 0,
    },
    '&:hover::before': {
      position: 'absolute',
      fontWeight: 800,
      content: `"${text}"`,
    },
  }),
});

const MenuItem = ({
  link,
  text,
  exact = false,
  useLink = false,
  linkProps,
}: TMenuItemProps) => {
  const classes = useStyles({ text });

  return (
    <li className={classes.root}>
      {useLink ? (
        <Link {...linkProps}>{text}</Link>
      ) : (
        <NavLink to={link} exact={exact} {...linkProps}>
          {text}
        </NavLink>
      )}
    </li>
  );
};

export default MenuItem;
