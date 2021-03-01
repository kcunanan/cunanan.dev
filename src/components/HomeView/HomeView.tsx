import React, { useState } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography } from '@material-ui/core';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Lottie from 'lottie-web-react';

import { ISite, ILottieOptions, IProject } from '../../interfaces';

import SectionHeading from '../Common/SectionHeading/SectionHeading';
// import OutlinedButton from '_/components/Common/OutlinedButton/OutlinedButton';
import ProjectRow from '../Common/ProjectRow/ProjectRow';

export type THomeViewProps = {
  site: ISite | null;
};

const useStyles = makeStyles((theme) => ({
  grid: {
    marginBottom: '5rem',
  },
  body1: {
    lineHeight: 1.5,
    whiteSpace: 'pre-wrap',
    fontSize: '24px',
    marginBottom: '2rem',
  },
  currently: {
    fontWeight: 300,
    fontSize: '24px',
    marginBottom: '1rem',
  },
  location: {
    fontFamily: '"Merriweather Sans", sans-serif',
    fontWeight: 800,
    fontSize: '36px',
    letterSpacing: '0.3em',
    [theme.breakpoints.down('xs')]: {
      marginBottom: '2rem',
      fontSize: '28px',
      textAlign: 'center',
    },
  },
  locationImageContainer: {
    textAlign: 'center',
  },
  locationImage: {
    maxWidth: '100%',
    maxHeight: '208px',
  },
  locationImageCaption: {
    fontSize: '18px',
    fontWeight: 300,
  },
  centerMobile: {
    [theme.breakpoints.down('xs')]: {
      textAlign: 'center',
      width: '100%',
    },
  },
  lottieContainer: {
    display: 'flex',
    flexDirection: 'column',
  },
  yarnWrapper: {
    flexGrow: 1,
    '& > div.string': {
      [theme.breakpoints.down('xs')]: {
        height: '100px',
      },
      content: '""',
      width: '1.5px',
      backgroundColor: '#272b3e',
      height: '100%',
      margin: 'auto',
      [theme.breakpoints.up('md')]: {
        margin: '-9rem auto 0 auto',
      },
    },
    '& > div.blue-ball': {
      backgroundColor: '#272b3e',
      borderRadius: '50%',
      height: '50px',
      width: '50px',
      position: 'relative',
      margin: 'auto',
    },
  },
}));

const HomeView = ({ site }: THomeViewProps) => {
  // useDispatch to get home page
  const matches = useMediaQuery('(max-width:959px)');
  const classes = useStyles();
  const projects = (site?.flocks.find((flock) => flock.slug === 'portfolio')
    ?.data as IProject[]) || [];
  const homePage = site?.pages.find((page) => page.slug === 'home');
  const [options, setOptions] = useState<ILottieOptions | null>(null);

  React.useEffect(() => {
    setOptions({
      loop: true,
      autoplay: true,
      path: homePage?.data.lottie,
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice',
      },
    });
  }, [homePage]);

  // add Layout here
  const { about, landing, location } = homePage?.data || {};
  return (
    <>
      {/* Intro */}
      <Grid
        container
        direction={matches ? 'column' : 'row'}
        className={classes.grid}
        spacing={2}
      >
        <Grid item xs={12} md={8}>
          <SectionHeading text={landing?.heading || ''} />
          <Typography className={classes.body1}>
            {landing?.description}
          </Typography>
          {/* <div className={classes.centerMobile}>
            <OutlinedButton text="look at my stuff" />
          </div> */}
        </Grid>
        <Grid className={classes.lottieContainer} item md={3} xs={12}>
          <div className={classes.yarnWrapper}>
            <div className="string" />
            <div className="blue-ball" />
          </div>
          <Lottie
            options={options}
            height={300}
            width={300}
            isStopped={false}
            isPaused={false}
          />
        </Grid>
      </Grid>
      {/* Project Section */}
      <Grid container className={classes.grid} spacing={2}>
        <Grid item xs={12} sm={10} md={6}>
          <SectionHeading text="projects" />
          <Typography className={classes.body1}>
            My experience in software engineering has mainly focused on internal
            tools that speed up daily activities.
          </Typography>
        </Grid>
        <Grid item sm={12}>
          {projects.map((project) => (
            <ProjectRow key={project.id} {...project} />
          ))}
          {/* <div className={classes.centerMobile}>
            <OutlinedButton text="view all of my projects" />
          </div> */}
        </Grid>
      </Grid>
      {/* About Section */}
      <Grid id="about" container className={classes.grid} spacing={2}>
        <Grid item md={8} xs={12}>
          <SectionHeading text={about?.heading || ''} />
          <Typography className={classes.body1}>{about?.paragraph}</Typography>
        </Grid>
        <Grid className={classes.lottieContainer} item md={4} sm={6} xs={12}>
          <Lottie
            options={options}
            height={300}
            width={300}
            isStopped={false}
            isPaused={false}
          />
        </Grid>
      </Grid>
      {/* Location */}
      <Grid container className={classes.grid} justify="center">
        <Grid container item sm={5} xs={12} alignItems="center">
          <div className={classes.centerMobile}>
            <Typography
              className={`${classes.body1} ${classes.currently}`}
              component="p"
            >
              currently situated in
            </Typography>
            <Typography variant="h5" className={classes.location}>
              {location?.city}
            </Typography>
          </div>
        </Grid>
        <Grid className={classes.locationImageContainer} item sm={5} xs={12}>
          <img
            className={classes.locationImage}
            src={location?.image?.url}
            alt={location?.city}
          />
          <Typography className={classes.locationImageCaption}>
            {location?.caption}
          </Typography>
        </Grid>
      </Grid>
    </>
  );
};

export default HomeView;
