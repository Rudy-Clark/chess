import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import themeProvider from '../themeProvider';
import ChessBoard from './ChessBoard';
import reducer from '../reducers';

const style = theme => ({
  container: {
    width: '860px',
    margin: `${theme.spacing.unit}px auto 0`,
    textAlign: 'center',
  },
});

const store = createStore(reducer);

const App = ({ classes }) => (
  <Provider store={store}>
    <div className={classes.container}>
      <ChessBoard />
    </div>
  </Provider>
);

App.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default themeProvider(withStyles(style)(App));
