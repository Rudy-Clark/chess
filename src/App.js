import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
// import CssBaseline from '@material-ui/core/CssBaseline';

import themeProvider from './themeProvider';

const style = theme => ({
  container: {
    maxWidth: '400px',
    margin: `${theme.spacing.unit * 8}px auto 0`,
  },
});

const App = ({ classes }) => (
  <div className={classes.container}>
    <h1>Hello World</h1>
  </div>
);

App.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default themeProvider(withStyles(style)(App));
