import { connect } from 'react-redux';
import Display from '../prensentational/Display';
import { getTitle } from '../selectors/titleSelector';

const mapStateToProps = state => ({
  title: getTitle(state)
});

const DisplayContainer = connect(
  mapStateToProps
)(Display);

export default DisplayContainer;
