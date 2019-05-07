import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

import Coords from './Coords';

const styles = () => ({
  paper: {
    width: '100%',
    height: 'auto',
    borderRadius: 0,
    border: '1px solid #837c7c',
  },
});

const ChessBoard = ({ classes }) => (
  <Paper className={classes.paper}>
    <Coords variant="horizontal" char="letters" />
  </Paper>
);

ChessBoard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ChessBoard);
