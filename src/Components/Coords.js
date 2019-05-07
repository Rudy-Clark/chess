import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classnames from 'classnames';
import Typography from '@material-ui/core/Typography';

const styles = () => ({
  flexCont: {
    display: 'flex',
    listStyle: 'none',
    padding: 0,
    margin: 0,
    width: '100%',
  },
  flexItem: {
    flexBasis: '12.5%',
    maxWidth: '12.5%',
    width: '12.5%',
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
    <ul className={classnames(classes.flexCont, classes[variant])}>
      {coords.map(coordinate => (
        <li className={classes.flexItem} key={coordinate.id}>
          <Typography>{coordinate.label}</Typography>
        </li>
      ))}
    </ul>
  );
};

Coords.propTypes = {
  classes: PropTypes.object.isRequired,
  variant: PropTypes.string.isRequired,
  char: PropTypes.string.isRequired,
};

export default withStyles(styles)(Coords);
