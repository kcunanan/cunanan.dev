import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

import { useParams } from 'react-router-dom';

import Markdown from '_/components/Markdown/Markdown';

import SectionHeading from '_/components/Common/SectionHeading/SectionHeading';

import {
  Grid, Link, List, ListItem, Typography,
} from '@material-ui/core';

import { Context } from '_/store/Store';
import { useFetch } from '_/hooks';

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

const Project = () => {
  const { projectSlug } = useParams();
  const [{ data }] = React.useContext(Context);
  const classes = useStyles();

  const url = `${ENVS.API_URL}?query=query ItemByKeyAndSubset($apiKey: String!, $flockSlug: String!, $subset: GenericScalar!) { itemByKeyAndSubset(apiKey: $apiKey, flockSlug: $flockSlug, subset: $subset) { item } }&operationName=ItemByKeyAndSubset&variables={"apiKey": "uxeU8-IWdYXhm1lG_eTd6Mdfbc4", "flockSlug": "portfolio", "subset": { "slug": "${projectSlug}" } }`;

  const [fetchData] = useFetch(url);

  const { item: project } = data?.itemByKeyAndSubset || {};

  React.useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <Grid container className={classes.root} spacing={2}>
      <Grid className={classes.tableOfContents} item xs={12} sm={3}>
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
  );
};

export default Project;
