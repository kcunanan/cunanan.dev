import React from 'react';
import { render } from 'react-dom';

import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';

import ReactGA from 'react-ga';
import { BrowserRouter as Router } from 'react-router-dom';

import Layout from '_/components/Layout/Layout';

import '../assets/styles/main.less';

if (ENVS.TRACKING_ID) {
  ReactGA.initialize(ENVS.TRACKING_ID);
  ReactGA.pageview(window.location.pathname + window.location.search);
}

const theme = createMuiTheme({
  palette: {
    background: {
      default: 'fff',
    },
    primary: {
      light: '#ffffff',
      main: '#fff',
      dark: '#32384C',
      contrastText: '#32384C',
    },
    secondary: {
      light: '#232735',
      main: '#32384C',
      dark: '#32384C',
      contrastText: '#fff',
    },
  },
  typography: {
    fontFamily: '"Merriweather", "Merriweather Sans", "Helvetica", "Arial", sans-serif',
  },
  overrides: {
    MuiCssBasline: {
      '@global': {
        '@font-face': ['Merriweather'],
      },
    },
  },
});

// app container
const appContainer = document.getElementById('app');
if (appContainer === null) {
  throw new Error('app container id "app" is not defined.');
}

// app component
const App = () => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <Router>
      <Layout />
    </Router>
  </ThemeProvider>
);

// renderer
const renderApp = () => {
  render(<App />, appContainer);
};

export default renderApp;
