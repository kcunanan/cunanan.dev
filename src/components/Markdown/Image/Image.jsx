import React from 'react';
import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/core/styles';

const useStylesImage = makeStyles({
  root: {
    display: 'block',
    textAlign: 'center',
    margin: '2rem 0',
    '& > img': {
      maxHeight: '100%',
      maxWidth: '100%',
    },
  },
  caption: {
    display: 'block',
    color: '#6e6e6e',
    fontFamily: '"Merriweather Sans", sans-serif',
    fontWeight: 300,
  },
});

const Image = ({ alt, src, title }) => {
  const classes = useStylesImage();
  return (
    <span className={classes.root}>
      <img
        alt={alt}
        src={src}
      />
      <span className={classes.caption}>
        {title}
      </span>
    </span>
  );
};

Image.propTypes = {
  alt: PropTypes.string,
  src: PropTypes.string,
  title: PropTypes.string,
};

Image.defaultProps = {
  alt: '',
  src: '',
  title: '',
};

export default Image;
