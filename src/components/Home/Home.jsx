/* eslint-disable global-require */
import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography } from '@material-ui/core';
import Lottie from 'react-lottie';

import { Context } from '_/store/Store';

import SectionHeading from '_/components/Common/SectionHeading/SectionHeading';
import OutlinedButton from '_/components/Common/OutlinedButton/OutlinedButton';
import ProjectRow from '_/components/Common/ProjectRow/ProjectRow';

const useStyles = makeStyles((theme) => ({
  grid: {
    marginBottom: '5rem',
  },
  body1: {
    lineHeight: 1.5,
    whiteSpace: 'pre-wrap',
    fontSize: '24px',
    marginBottom: '2rem',
    [theme.breakpoints.down('xs')]: {
      textAlign: 'center',
    },
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
    '& > div.push': {
      flexGrow: 1,
      '&::before': {
        content: '""',
      },
    },
  },
}));

const Home = () => {
  const classes = useStyles();
  const [data, setData] = React.useState({});
  const [{ loading }, dispatch] = React.useContext(Context);

  const url = `${ENVS.API_URL}?query=query SiteByKey($apiKey: String!, $pageSlug: String!) { pageByKey(apiKey: $apiKey, pageSlug: $pageSlug) { id name slug data } }&operationName=SiteByKey&variables={"apiKey": "uxeU8-IWdYXhm1lG_eTd6Mdfbc4", "pageSlug": "home"}`;

  React.useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(url);
      const { data: pageData } = (await response.json()).data?.pageByKey || {};
      setData(pageData);
      setTimeout(() => {
        dispatch({ type: 'SET_LOADING', payload: false });
      }, 1000);
    };
    fetchData();
  }, [dispatch, url]);

  const defaultOptions = {
    loop: true,
    autoplay: true,
    path: data?.lottie,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return !loading ? (
    <>
      {/* Intro */}
      <Grid container className={classes.grid} spacing={2}>
        <Grid item xs={12} sm={8}>
          <SectionHeading text={data?.landing?.heading || ''} />
          <Typography className={classes.body1}>
            {data?.landing?.description}
          </Typography>
          <div className={classes.centerMobile}>
            <OutlinedButton text="look at my stuff" />
          </div>
        </Grid>
        <Grid className={classes.lottieContainer} item sm={3} xs={12}>
          <div className="push" />
          <Lottie
            options={defaultOptions}
            height={300}
            width={300}
            isStopped={false}
            isPaused={false}
          />
        </Grid>
      </Grid>
      {/* Project Section */}
      <Grid container className={classes.grid} spacing={2}>
        <Grid item xs={12} sm={6}>
          <SectionHeading text="projects" />
          <Typography className={classes.body1}>
            My experience in software engineering has mainly focused
            on internal tools that speed up daily activities.
          </Typography>
        </Grid>
        <Grid item sm={12}>
          <ProjectRow
            name="Project 1"
            description="This is a description of a project in about a sentence or two. Give me a brief overview of the application and your role."
            tags={['React', 'React', 'React']}
          />
          <div className={classes.centerMobile}>
            <OutlinedButton text="view all of my projects" />
          </div>
        </Grid>
      </Grid>
      {/* About Section */}
      <Grid container className={classes.grid} spacing={2}>
        <Grid item sm={8} xs={12}>
          <SectionHeading text={data?.about?.heading || ''} />
          <Typography className={classes.body1}>
            {data?.about?.paragraph}
          </Typography>
        </Grid>
        <Grid className={classes.lottieContainer} item sm={3} xs={12}>
          <div className="push" />
          <Lottie
            options={defaultOptions}
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
            <Typography className={`${classes.body1} ${classes.currently}`} component="p">
              currently situated in
            </Typography>
            <Typography variant="h5" className={classes.location}>
              {data?.location?.city}
            </Typography>
          </div>
        </Grid>
        <Grid className={classes.locationImageContainer} item sm={5} xs={12}>
          <img
            className={classes.locationImage}
            src={data?.location?.image?.url}
            alt={data?.location?.city}
          />
          <Typography className={classes.locationImageCaption}>
            {data?.location?.caption}
          </Typography>
        </Grid>
      </Grid>
    </>
  ) : null;
};

export default Home;
