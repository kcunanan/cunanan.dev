import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

import { useParams } from 'react-router-dom';

import { Helmet } from 'react-helmet';

import Markdown from '../components/Markdown/Markdown';
import SectionHeading from '../components/Common/SectionHeading/SectionHeading';

import {
  Grid, Link, List, ListItem, Typography,
} from '@material-ui/core';

import { IProject } from '../interfaces';

export type TProjectContainerProps = {
  projects?: IProject[];
}

const useStyles = makeStyles({
  root: {
    marginBottom: '4rem',
  },
  logo: {
    marginTop: '-2rem',
  },
  item: {
    fontFamily: '"Merriweather Sans", sans-serif',
    color: '#696b74',
    '& > a': {
      color: 'inherit',
    },
  },
  subItem: {
    marginLeft: '1rem',
    borderLeft: '4px solid #ececec',
  },
  content: {
    fontSize: '16px',
    lineHeight: '30px',
    whiteSpace: 'break-spaces',
    '& > div': {
      marginTop: '4rem',
    },
  },
  tools: {
    fontFamily: '"Merriweather Sans", sans-serif',
    fontSize: '16px',
    fontWeight: 500,
    textTransform: 'uppercase',
  },
});

const Project = ({ projects }: TProjectContainerProps) => {
  const classes = useStyles();
  const { projectSlug } = useParams<{ projectSlug: string }>();
  const project = projects?.find((p) => p.slug === projectSlug);

  if (!project) {
    return null;
  }


  return (
    <>
      <Helmet>
        <title>{`Kevin Cunanan | Portfolio | ${project?.name}`}</title>
        <meta property="og:title" content={`Kevin Cunanan | Portfolio | ${project?.name}`} />
        <meta property="og:description" content={project?.headline} />
        <meta property="og:image" content={project?.logo?.url} />
        <meta property="og:url" content={`/projects/${project?.slug}`} />
        <meta name="twitter:image:alt" content={`${project?.name} Application Logo`} />

        <meta property="og:site_name" content="Kevin Cunanan | Software Engineer Portfolio" />
      </Helmet>
      <Grid container className={classes.root} spacing={2}>
        <Grid item xs={12} sm={3}>
          <img
            className={classes.logo}
            src={project?.logo?.url}
            alt={project?.name}
            referrerPolicy="no-referrer"
          />
          <List>
            <ListItem className={classes.item}>
              <Link href="#overview">Project Overview</Link>
            </ListItem>
            <ListItem className={classes.item}>
              <Link href="#introduction">Introduction</Link>
            </ListItem>
            <ListItem className={classes.item}>
              <Link href="#requirements">Requirements</Link>
            </ListItem>
            <ListItem className={classes.item}>
              <Link href="#architecture">Architecture</Link>
            </ListItem>
            <ListItem className={`${classes.item} ${classes.subItem}`}>
              <Link href="#backend">Backend</Link>
            </ListItem>
            <ListItem className={`${classes.item} ${classes.subItem}`}>
              <Link href="#frontend">Frontend</Link>
            </ListItem>
            <ListItem className={`${classes.item} ${classes.subItem}`}>
              <Link href="#aws">AWS Architecture</Link>
            </ListItem>
            <ListItem className={`${classes.item} ${classes.subItem}`}>
              <Link href="#ci+cd">Continuous Integration / Continuous Delivery</Link>
            </ListItem>
            <ListItem className={classes.item}>
              <Link href="#ui">UI</Link>
            </ListItem>
          </List>
        </Grid>
        <Grid className={classes.content} item xs={12} sm={9}>
          <div id="overview" />
          <SectionHeading text="Project Overview" size="36px" />
          <Markdown source={project?.tldr} escapeHtml={false} />

          <div id="tools" />
          <Typography className={classes.tools}>Tools Used</Typography>
          <Markdown source={project?.tools} escapeHtml={false} />

          <div id="introduction" />
          <SectionHeading text="Introduction" size="36px" />
          <Markdown source={project?.introduction} escapeHtml={false} />

          <div id="requirements" />
          <SectionHeading text="Requirements" size="36px" />
          <Markdown source={project?.requirements} escapeHtml={false} />

          <div id="architecture" />
          <SectionHeading text="Architecture" size="36px" />
          <Markdown source={project?.architecture} escapeHtml={false} />

          <div id="ui" />
          <SectionHeading text="UI" size="36px" />
          <Markdown source={project?.wireframes_ui} escapeHtml={false} />
        </Grid>
      </Grid>
    </>
  );
};

export default Project;
