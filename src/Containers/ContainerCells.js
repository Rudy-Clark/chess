import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';

import Cell from '../Components/Cell';
import { selectCell } from '../actions';
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

const ContainerCells = ({ classes, cells, handleSelect }) => (
  <div className={classes.root}>
    {cells.map(cell => (
      <div className={classes.wrapper} key={cell.id}>
        <Cell handleSelect={handleSelect} {...cell} />
      </div>
    ))}
  </div>
);

ContainerCells.propTypes = {
  classes: PropTypes.object.isRequired,
  cells: PropTypes.array.isRequired,
  handleSelect: PropTypes.func.isRequired,
};

const styledComponent = withStyles(styles)(ContainerCells);

const mapStateToProps = ({ cells }) => ({
  cells: getFilteredCells(cells),
});

const mapDispatchToProps = dispatch => ({
  handleSelect: id => dispatch(selectCell(id)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(styledComponent);
