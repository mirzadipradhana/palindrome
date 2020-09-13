import React from 'react';
import {ThemeProvider} from "styled-components";
import {MuiThemeProvider, StylesProvider, createMuiTheme} from "@material-ui/core/styles";

import { BrowserRouter as Router } from 'react-router-dom';

import Routes from './Routes';

import './assets/styles/App.css';

function App() {
  const theme = createMuiTheme();
  return (
    <StylesProvider injectFirst>
      <MuiThemeProvider theme={theme}>
        <ThemeProvider theme={theme}>
          <Router>
            <Routes />
          </Router>
        </ThemeProvider>
      </MuiThemeProvider>
    </StylesProvider>
  );
}

export default App;
