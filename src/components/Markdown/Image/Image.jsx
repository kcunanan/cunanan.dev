import React from 'react';
import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/core/styles';

const useStylesImage = makeStyles({
  root: {
    textAlign: 'center',
    margin: '2rem 0',
    '& > img': {
      maxHeight: '100%',
      maxWidth: '100%',
    },
  },
  caption: {
    color: '#6e6e6e',
    fontFamily: '"Merriweather Sans", sans-serif',
    fontWeight: 300,
  },
});

const Image = ({ alt, src, title }) => {
  const classes = useStylesImage();
  return (
    <div className={classes.root}>
      <img
        alt={alt}
        src={src}
      />
      <div className={classes.caption}>
        {title}
      </div>
    </div>
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
