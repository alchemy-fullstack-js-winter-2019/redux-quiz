import { connect } from 'react-redux';
import Controls from '../components/Controls';
import { getSubtitle, getTitle } from '../selectors/TitleSubtitleEditor';
import { updateTitle, updateSubtitle } from '../actions/TitleSubtitleEditor';

const mapStateToProps = state => ({
  title: getTitle(state),
  subtitle: getSubtitle(state)
});

const mapDispatchToProps = (dispatch) => ({
  onTitleChange({ target }) {
    dispatch(updateTitle(target.value));
  },
  onSubtitleChange({ target }) {
    dispatch(updateSubtitle(target.value));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Controls);
