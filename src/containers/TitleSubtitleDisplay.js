import { connect } from 'react-redux';
import Display from '../components/Display';
import { getSubtitle, getTitle } from '../selectors/TitleSubtitleEditor';

const mapStateToProps = state => (console.log('state', state), {
  title: getTitle(state),
  subtitle: getSubtitle(state)
});

export default connect(
  mapStateToProps
)(Display);
