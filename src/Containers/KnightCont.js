import { connect } from 'react-redux';

import { deselect } from '../actions';
import Knight from '../Components/Knight';

const mapDispatchToProps = dispatch => ({
  handleSelect: () => dispatch(deselect()),
});

export default connect(
  null,
  mapDispatchToProps,
)(Knight);
