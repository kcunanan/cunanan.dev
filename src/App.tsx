import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import ReactGA from 'react-ga';
import { CssBaseline } from '@material-ui/core';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';

import Container from './containers/Container';

import store, { persistor } from './store';

const { REACT_APP_TRACKING_ID } = process.env;

if (REACT_APP_TRACKING_ID) {
  ReactGA.initialize(REACT_APP_TRACKING_ID);
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
      dark: '#b2b2b2',
      contrastText: '#32384C',
    },
    secondary: {
      light: '#5b5f6f',
      main: '#32384C',
      dark: '#232735',
      contrastText: '#fff',
    },
  },
  typography: {
    fontFamily:
      '"Merriweather", "Merriweather Sans", "Helvetica", "Arial", sans-serif',
  },
});

function App() {
  return (
    <Router>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <div className="App">
            <CssBaseline />
            <ThemeProvider theme={theme}>
              <Container />
            </ThemeProvider>
          </div>
        </PersistGate>
      </Provider>
    </Router>
  );
}

export default App;
