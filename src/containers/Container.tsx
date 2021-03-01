import { useEffect } from 'react';
import {
  useLocation, Switch, Route, Redirect,
} from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Helmet } from 'react-helmet';

import { AppStoreState } from '../store';
import { getSite, startLoading, stopLoading } from '../store/actions';
import HomeView from '../components/HomeView';
import ProjectView from '../components/ProjectView';
import Layout from '../components/Layout/Layout';

import { IProject } from '../interfaces';

const Container = () => {
  const dispatch = useDispatch();
  const { REACT_APP_FLOAT_KEY: apiKey = '' } = process.env;
  const site = useSelector((state: AppStoreState) => state.site);
  const location = useLocation();

  useEffect(() => {
    startLoading()(dispatch);
    if (!site) {
      getSite(apiKey)(dispatch).then(() => {
        stopLoading()(dispatch);
      });
    } else {
      setTimeout(() => {
        stopLoading()(dispatch);
      }, 1000);
    }
  }, [apiKey, dispatch, site, location]);

  const footer = site?.pages.find((page) => page.slug === 'footer');
  const portfolio = site?.flocks.find((flock) => flock.slug === 'portfolio');
  const loading = useSelector((state: AppStoreState) => state.loading);
  const projects: IProject[] = (portfolio?.data as IProject[]) || [];

  return (
    <>
      <Helmet>
        <title>Kevin Cunanan | Portfolio</title>
        <meta property="og:title" content="Kevin Cunanan | Portfolio" />
        <meta property="og:description" content="Software Engineer Portfolio" />
        <meta
          property="og:image"
          content="https://float-static.s3-us-west-2.amazonaws.com/media/kevin-cunanan-github.jpg"
        />
        <meta property="og:url" content="https://cunanan.dev" />
        <meta name="twitter:image:alt" content="Kevin Cunanan | GitHub HQ" />

        <meta
          property="og:site_name"
          content="Kevin Cunanan | Software Engineer Portfolio"
        />
      </Helmet>
      <Layout loading={loading} footer={footer} projects={projects}>
        <Switch>
          <Route exact path="/" render={() => <HomeView site={site} />} />
          <Route
            exact
            path="/projects/:projectSlug"
            render={() => <ProjectView projects={projects} />}
          />
          <Redirect to="/" />
        </Switch>
      </Layout>
    </>
  );
};

export default Container;
