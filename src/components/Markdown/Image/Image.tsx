import { makeStyles } from '@material-ui/core/styles';

export type TImageProps = {
  alt: string;
  src: string;
  title: string;
};

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

const Image = ({ alt, src, title }: TImageProps) => {
  const classes = useStylesImage();
  return (
    <span className={classes.root}>
      <img alt={alt} src={src} />
      <span className={classes.caption}>{title}</span>
    </span>
  );
};

export default Image;
