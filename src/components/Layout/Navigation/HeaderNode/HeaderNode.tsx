import React from 'react';

import { Container } from '@material-ui/core';
import { Switch, Route } from 'react-router-dom';
import Navigation from '../Navigation';
import ProjectHeader from '../ProjectHeader/ProjectHeader';

import { IProject } from '../../../../interfaces';

export type THeaderNodeProps = {
  projects: IProject[];
};

const HeaderNode = ({ projects }: THeaderNodeProps) => (
  <Switch>
    <Route
      path="/projects/:projectSlug"
      name="projects"
      render={() => (
        <ProjectHeader projects={projects} navigation={<Navigation />} />
      )}
    />
    <Route
      exact
      path="/"
      render={() => (
        <Container>
          <Navigation />
        </Container>
      )}
    />
  </Switch>
);

export default HeaderNode;
