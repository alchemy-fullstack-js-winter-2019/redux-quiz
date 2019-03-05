import { connect } from 'react-redux';
import Display from '../components/Display';
import { getTitle, getSubTitle } from '../selectors/titleSelector';

const mapStateToProps = state => ({
  title: getTitle(state),
  subtitle: getSubTitle(state)
});

const DisplayContainer = connect(
  mapStateToProps
)(Display);

export default DisplayContainer;
