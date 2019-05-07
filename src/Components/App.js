import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import themeProvider from '../themeProvider';
import ChessBoard from './ChessBoard';

const style = theme => ({
  container: {
    maxWidth: '960px',
    margin: `${theme.spacing.unit * 8}px auto 0`,
    textAlign: 'center',
  },
});

const App = ({ classes }) => (
  <div className={classes.container}>
    <ChessBoard />
  </div>
);

App.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default themeProvider(withStyles(style)(App));
