import { connect } from 'react-redux';
import Controls from '../components/Controls';
import { getBottomText, getTopText } from '../selectors/text';
import { updateBottomText, updateTopText } from '../actions/text';

const mapStateToProps = state => ({
  topText: getTopText(state),
  bottomText: getBottomText(state)
});

const mapDispatchToProps = dispatch => ({
  onChangeTop({ target }) {
    dispatch(updateTopText(target.value));
  },
  onChangeBottom({ target }) {
    dispatch(updateBottomText(target.value));
  }
});

export default connect(
  mapStateToProps, mapDispatchToProps
)(Controls);
