import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classnames from 'classnames';

const styles = () => ({
  flexCont: {
    display: 'flex',
    listStyle: 'none',
    padding: 0,
    margin: 0,
  },
  horizontal: {
    flexDirection: 'row',
  },
  vertical: {
    flexDirection: 'column',
  },
});

const Coords = ({ classes, variant, char }) => {
  const coords = [];
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < 8; i++) {
    if (char === 'letters') {
      coords.push({ label: String.fromCharCode(65 + i), id: i });
    } else if (char === 'numbers') {
      coords.push({ label: i + 1, id: i });
    }
  }
  return (
    <div>
      <ul className={classes.flexCont}>
        {coords.map(coordinate => (
          <li
            className={classnames(classes.flexItem, [classes[variant]])}
            key={coordinate.id}
          >
            {coordinate.label}
          </li>
        ))}
      </ul>
    </div>
  );
};

Coords.propTypes = {
  classes: PropTypes.object.isRequired,
  variant: PropTypes.string.isRequired,
  char: PropTypes.string.isRequired,
};

export default withStyles(styles)(Coords);
