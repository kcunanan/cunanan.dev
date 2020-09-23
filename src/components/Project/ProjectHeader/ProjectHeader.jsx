import React from 'react';
import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/core/styles';

import { Container, Typography } from '@material-ui/core';

import { Context } from '_/store/Store';

const useStyles = makeStyles({
  root: (props) => ({
    backgroundColor: props.header_color,
    color: '#fff',
  }),
  container: {
    paddingBottom: '4rem',
  },
  name: {
    fontWeight: 600,
    fontSize: '36px',
    margin: '1rem 0',
  },
  heading: {
    fontWeight: 300,
    fontSize: '20px',
    letterSpacing: '6px',
  },
  headline: {
    fontWeight: 300,
    fontSize: '14px',
  },
});

const ProjectHeader = ({ navigation }) => {
  const [{ data }] = React.useContext(Context);

  const { item: project = {} } = data?.itemByKeyAndSubset || {};

  const classes = useStyles(project);

  return (
    <div className={classes.root}>
      <Container className={classes.container}>
        {navigation}
        <Typography className={classes.heading}>projects</Typography>
        <Typography className={classes.name}>{project.name}</Typography>
        <Typography className={classes.headline}>{project.headline}</Typography>
      </Container>
    </div>
  );
};

ProjectHeader.propTypes = {
  navigation: PropTypes.node.isRequired,
};

export default ProjectHeader;
