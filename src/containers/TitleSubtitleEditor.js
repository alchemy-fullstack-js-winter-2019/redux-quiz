import { connect } from 'react-redux';
import Controls from '../components/Controls';
import { getTitle, getSubtitle } from '../selectors/titles';

const mapStateToProps = state => ({
  title: getTitle(state),
  subtitle: getSubtitle(state)
});

// const mapDispatchToProps = dispatch => {
//   dispatch(updateTitles)
// };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Controls);
