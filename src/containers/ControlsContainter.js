import { connect } from 'react-redux';
import Controls from '../components/controls/Controls';
import { getTitle, getSubtitle } from '../selectors/controls';

const mapStateToProps = state => ({
  title: getTitle(state),
  subtitle: getSubtitle(state)
});

export default connect(
  mapStateToProps
)(Controls);