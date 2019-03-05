import { connect } from 'react-redux';
import Controls from '../components/Controls';
import { getTitle, getSubTitle } from '../selectors/editor';
import { updateTitle, updateSubTitle } from '../actions/editor';

const mapStateToProps = state => ({
  title: getTitle(state),
  subtitle: getSubTitle(state)
});

const mapDispatchToProps = dispatch => ({
  updateTitle({ target }) {
    dispatch(updateTitle(target.value));
  },
  updateSubTitle({ target }) {
    dispatch(updateSubTitle(target.value));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Controls);
