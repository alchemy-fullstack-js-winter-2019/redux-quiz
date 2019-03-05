import { connect } from 'redux';
import Display from '../components/Display';
import { getSubtitle, getTitle } from '../selectors/TitleSubtitleEditor';

const mapStateToProps = state => ({
  title: getTitle(state),
  subtitle: getSubtitle(state)
});

export default connect(
  mapStateToProps
)(Display);
