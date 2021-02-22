import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

import { Theme, Typography } from '@material-ui/core';

export type TSectionHeadingProps = {
  text: string;
  color?: 'primary' | 'secondary';
  size?: string;
};

const useStyles = makeStyles<
Theme,
Pick<TSectionHeadingProps, 'color' | 'size'>
>((theme) => ({
  root: ({ color, size }) => ({
    fontWeight: 900,
    fontSize: size,
    color:
      color === 'secondary'
        ? theme.palette.secondary.main
        : theme.palette.primary.main,
    marginBottom: '2rem',
    [theme.breakpoints.down('xs')]: {
      textAlign: 'center',
    },
  }),
}));

const SectionHeading = ({
  text,
  color = 'secondary',
  size = '48px',
}: TSectionHeadingProps) => {
  const classes = useStyles({ color, size });
  return (
    <Typography className={classes.root} variant="h2">
      {text}
    </Typography>
  );
};

export default SectionHeading;
