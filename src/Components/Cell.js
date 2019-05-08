import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import brown from '@material-ui/core/colors/brown';
import green from '@material-ui/core/colors/green';
import classnames from 'classnames';

import Knight from '../Containers/KnightCont';

const styles = () => ({
  root: {
    width: '100%',
    backgroundColor: '#fff',
    height: '100px',
    position: 'relative',
    cursor: 'pointer',
    outline: 'none',
  },
  overlay: {
    position: 'absolute',
    height: '100%',
    width: '100%',
    top: '0',
    left: '0',
    backgroundColor: green[500],
    opacity: 0.8,
    zIndex: 9999,
  },
  black: {
    backgroundColor: brown[900],
  },
});

const Cell = ({
  id,
  classes,
  black,
  knightHere,
  canMove,
  handleSelect,
  moveTo,
}) => (
  <div
    role="button"
    onKeyDown={() => {}}
    tabIndex={-1}
    onClick={e => {
      e.stopPropagation();
      handleSelect(id);
    }}
    className={classnames(classes.root, {
      [classes.black]: black,
    })}
  >
    {knightHere && <Knight />}
    {canMove && (
      <div
        role="button"
        onKeyDown={() => {}}
        tabIndex={-1}
        className={classes.overlay}
        onClick={e => {
          e.stopPropagation();
          moveTo(id);
        }}
      />
    )}
  </div>
);

Cell.propTypes = {
  id: PropTypes.string.isRequired,
  classes: PropTypes.object.isRequired,
  black: PropTypes.bool.isRequired,
  knightHere: PropTypes.bool.isRequired,
  canMove: PropTypes.bool.isRequired,
  handleSelect: PropTypes.func.isRequired,
};

export default withStyles(styles)(Cell);
