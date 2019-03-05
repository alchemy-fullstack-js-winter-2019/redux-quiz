import { connect } from 'react-redux';
import Display from '../components/Display';
import { getBottomText, getTopText } from '../selectors/text';

const mapStateToProps = state => ({
  topText: getTopText(state),
  bottomText: getBottomText(state)
});

export default connect(
  mapStateToProps, null
)(Display);
