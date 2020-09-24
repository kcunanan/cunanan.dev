/* eslint-disable global-require */
import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography } from '@material-ui/core';
import Lottie from 'lottie-web-react';

import { Helmet } from 'react-helmet';

import { Context } from '_/store/Store';
import { useFetch } from '_/hooks';

import SectionHeading from '_/components/Common/SectionHeading/SectionHeading';
// import OutlinedButton from '_/components/Common/OutlinedButton/OutlinedButton';
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
  const [options, setOptions] = React.useState({});
  const [{ data }] = React.useContext(Context);
  const url = `${ENVS.API_URL}?query=query HomeQuery($apiKey: String!, $pageSlug: String!, $flockSlug: String!) { flockByKey(apiKey: $apiKey, flockSlug: $flockSlug) { id name slug data } pageByKey(apiKey: $apiKey, pageSlug: $pageSlug) { id name slug data } }&operationName=HomeQuery&variables={"apiKey": "uxeU8-IWdYXhm1lG_eTd6Mdfbc4", "pageSlug": "home", "flockSlug": "portfolio"}`;

  const [fetchData] = useFetch(url);

  React.useEffect(() => {
    fetchData((floatData) => {
      const { pageByKey } = floatData;
      setOptions({
        loop: true,
        autoplay: true,
        path: pageByKey?.data?.lottie,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice',
        },
      });
    });
  }, [fetchData]);

  const { data: projects = [] } = data?.flockByKey || {};

  const { data: home } = data?.pageByKey || {};

  return (
    <>
      <Helmet>
        <title>Kevin Cunanan | Portfolio</title>
        <meta property="og:title" content="Kevin Cunanan | Portfolio" />
        <meta property="og:description" content="Software Engineer Portfolio" />
        <meta property="og:image" content="https://float-static.s3-us-west-2.amazonaws.com/media/kevin-cunanan-github.jpg" />
        <meta property="og:url" content="https://cunanan.dev" />
        <meta name="twitter:image:alt" content="Kevin Cunanan | GitHub HQ" />

        <meta property="og:site_name" content="Kevin Cunanan | Software Engineer Portfolio" />
      </Helmet>
      {/* Intro */}
      <Grid container className={classes.grid} spacing={2}>
        <Grid item xs={12} sm={8}>
          <SectionHeading text={home?.landing?.heading || ''} />
          <Typography className={classes.body1}>
            {home?.landing?.description}
          </Typography>
          {/* <div className={classes.centerMobile}>
            <OutlinedButton text="look at my stuff" />
          </div> */}
        </Grid>
        <Grid className={classes.lottieContainer} item sm={3} xs={12}>
          <div className="push" />
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
        <Grid item xs={12} sm={6}>
          <SectionHeading text="projects" />
          <Typography className={classes.body1}>
            My experience in software engineering has mainly focused
            on internal tools that speed up daily activities.
          </Typography>
        </Grid>
        <Grid item sm={12}>
          {projects.map((project) => (
            <ProjectRow
              key={project.id}
              project={project}
            />
          ))}
          {/* <div className={classes.centerMobile}>
            <OutlinedButton text="view all of my projects" />
          </div> */}
        </Grid>
      </Grid>
      {/* About Section */}
      <Grid id="about" container className={classes.grid} spacing={2}>
        <Grid item sm={8} xs={12}>
          <SectionHeading text={home?.about?.heading || ''} />
          <Typography className={classes.body1}>
            {home?.about?.paragraph}
          </Typography>
        </Grid>
        <Grid className={classes.lottieContainer} item sm={3} xs={12}>
          <div className="push" />
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
            <Typography className={`${classes.body1} ${classes.currently}`} component="p">
              currently situated in
            </Typography>
            <Typography variant="h5" className={classes.location}>
              {home?.location?.city}
            </Typography>
          </div>
        </Grid>
        <Grid className={classes.locationImageContainer} item sm={5} xs={12}>
          <img
            className={classes.locationImage}
            src={home?.location?.image?.url}
            alt={home?.location?.city}
          />
          <Typography className={classes.locationImageCaption}>
            {home?.location?.caption}
          </Typography>
        </Grid>
      </Grid>
    </>
  );
};

export default Home;
