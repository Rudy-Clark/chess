import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classnames from 'classnames';

const styles = () => ({
  root: {
    width: '100%',
    backgroundColor: '#fff',
  },
});

const Cell = ({ classes }) => <div className={classes.root}></div>;

Cell.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Cell);
