import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

import Coords from './Coords';
import ContainerCells from '../Containers/ContainerCells';
const styles = () => ({
  paper: {
    width: '100%',
    height: 'auto',
    borderRadius: 0,
    border: '1px solid #837c7c',
  },
  flexCont: {
    display: 'flex',
    flexFlow: 'row wrap',
    justifyContent: 'center',
  },
});

const ChessBoard = ({ classes }) => (
  <Paper className={classes.paper}>
    <div className={classes.flexCont}>
      <div style={{ flexBasis: '802px', alignSelf: 'center' }}>
        <Coords variant="horizontal" char="letters" />
      </div>
      <div
        className={classes.flexCont}
        style={{ flexBasis: '100%', justifyContent: 'space-between' }}
      >
        <div style={{ flexBasis: '28px', alignSelf: 'center' }}>
          <Coords variant="vertical" char="numbers" />
        </div>
        <div style={{ flexBasis: '802px', alignSelf: 'center' }}>
          <ContainerCells />
        </div>
        <div style={{ flexBasis: '28px', alignSelf: 'center' }}>
          <Coords variant="vertical" char="numbers" />
        </div>
      </div>
      <div style={{ flexBasis: '802px', alignSelf: 'center' }}>
        <Coords variant="horizontal" char="letters" />
      </div>
    </div>
  </Paper>
);

ChessBoard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ChessBoard);
