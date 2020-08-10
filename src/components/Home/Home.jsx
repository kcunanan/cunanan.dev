import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography } from '@material-ui/core';
import Lottie from 'react-lottie';

import SectionHeading from '_/components/Common/SectionHeading/SectionHeading';
import OutlinedButton from '_/components/Common/OutlinedButton/OutlinedButton';
import ProjectRow from '_/components/Common/ProjectRow/ProjectRow';

import LosAngeles from '_/assets/images/los_angeles.png';
import * as catData from '_/assets/images/cat.json';

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

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: catData.default,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <>
      {/* Intro */}
      <Grid container className={classes.grid} spacing={2}>
        <Grid item xs={12} sm={8}>
          <SectionHeading text="kevin cunanan" />
          <Typography className={classes.body1}>
            {`full stack developer\n
react subject matter expert\n
maker of cool things\n
verified cat enthusiast`}
          </Typography>
          <OutlinedButton text="look at my stuff" />
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
          <ProjectRow
            name="Project 1"
            description="This is a description of a project in about a sentence or two. Give me a brief overview of the application and your role."
            tags={['React', 'React', 'React']}
          />
          <ProjectRow
            name="Project 1"
            description="This is a description of a project in about a sentence or two. Give me a brief overview of the application and your role."
            tags={['React', 'React', 'React']}
          />
          <OutlinedButton text="view all of my projects" />
        </Grid>
      </Grid>
      {/* About Section */}
      <Grid container className={classes.grid} spacing={2}>
        <Grid item sm={8} xs={12}>
          <SectionHeading text="about" />
          <Typography className={classes.body1}>
            {`I'm a software engineer, that affirms in team-driven development and a desire to continuously find and implement the best practices.\n
I believe that the most important skill for a developer is the ability to learn while also having the willingness to adapt. When developing an application, I don't mindlessly develop; instead, I code and build features that make sense and discuss with others on those features that don't.\n
While the majority of my knowledge has been centered around traditional web development, I'm currently trying personal projects on mobile and desktop platforms using frameworks like Swift and React Native in conjunction with GraphQL.\n
However, my life extends beyond software engineering and at the end of the day I look for ways to bond with others through activities like competing in super smash bros parties, playing volleyball, or rock climbing; I think having that activity and engagement is super important part of work-life balance.\n
I'm also a huge fan cats and other fluffy animals.`}
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
          <div className={classes.locationTypographyContainer}>
            <Typography className={`${classes.body1} ${classes.currently}`} component="p">
              currently situated in
            </Typography>
            <Typography className={classes.location}>
              LOS ANGELES
            </Typography>
          </div>
        </Grid>
        <Grid className={classes.locationImageContainer} item sm={5} xs={12}>
          <img className={classes.locationImage} src={LosAngeles} alt="Los Angeles" />
          <Typography className={classes.locationImageCaption}>
            {'(And it\'s a blast)'}
          </Typography>
        </Grid>
      </Grid>
    </>
  );
};

export default Home;
