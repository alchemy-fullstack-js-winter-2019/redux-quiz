import { connect } from 'react-redux';
import Display from '../components/Display';
import { getTitle, getSubTitle } from '../selectors/controls';

const mapStateToProps = state => ({
  title: getTitle(state),
  subtitle: getSubTitle(state)
});

export default connect(
  mapStateToProps
)(Display);
