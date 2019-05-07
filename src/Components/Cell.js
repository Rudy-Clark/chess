import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import brown from '@material-ui/core/colors/brown';
import classnames from 'classnames';

const styles = () => ({
  root: {
    width: '100%',
    backgroundColor: '#fff',
    height: '100px',
  },
  black: {
    backgroundColor: brown[900],
  },
});

const Cell = ({ classes, black }) => (
  <div
    className={classnames(classes.root, {
      [classes[black]]: black,
    })}
  />
);

Cell.propTypes = {
  classes: PropTypes.object.isRequired,
  black: PropTypes.bool.isRequired,
};

export default withStyles(styles)(Cell);
