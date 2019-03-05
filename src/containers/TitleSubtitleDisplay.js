import { connect } from 'react-redux';
import Display from '../components/display/Display';
import { getTitle, getSubtitle } from '../selectors/controls';

const mapStateToProps = state => ({
  title: getTitle(state),
  subtitle: getSubtitle(state)
});

export default connect(
  mapStateToProps
)(Display);
