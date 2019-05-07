import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';

import Cell from '../Components/Cell';

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

const ContainerCells = ({ classes, cells }) => (
  <div className={classes.root}>
    {cells.map(cell => (
      <div className={classes.wrapper} key={cell.id}>
        <Cell {...cell} />
      </div>
    ))}
  </div>
);

ContainerCells.propTypes = {
  classes: PropTypes.object.isRequired,
  cells: PropTypes.array.isRequired,
};

const styledComponent = withStyles(styles)(ContainerCells);

const mapStateToProps = ({ cells }) => ({ cells });

export default connect(mapStateToProps)(styledComponent);
