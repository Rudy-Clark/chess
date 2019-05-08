import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';

import Cell from '../Components/Cell';
import { selectCell, move } from '../actions';
import { getFilteredCells } from '../reselect';

const styles = () => ({
  root: {
    border: '1px solid #e3e3e3',
    padding: 0,
    margin: 0,
    display: 'flex',
    flexFlow: 'row wrap',
  },
  wrapper: {
    flexBasis: '100px',
    width: '100px',
  },
});

const ContainerCells = ({ classes, cells, handleSelect, moveTo }) => (
  <div className={classes.root}>
    {cells.map(cell => (
      <div className={classes.wrapper} key={cell.id}>
        <Cell moveTo={moveTo} handleSelect={handleSelect} {...cell} />
      </div>
    ))}
  </div>
);

ContainerCells.propTypes = {
  classes: PropTypes.object.isRequired,
  cells: PropTypes.array.isRequired,
  handleSelect: PropTypes.func.isRequired,
  moveTo: PropTypes.func.isRequired,
};

const styledComponent = withStyles(styles)(ContainerCells);

const mapStateToProps = ({ cells }) => ({
  cells: getFilteredCells(cells),
});

const mapDispatchToProps = dispatch => ({
  handleSelect: id => dispatch(selectCell(id)),
  moveTo: id => dispatch(move(id)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(styledComponent);
