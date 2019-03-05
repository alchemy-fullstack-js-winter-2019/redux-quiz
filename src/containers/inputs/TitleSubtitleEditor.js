import { connect } from 'react-redux';
import { getTitle, getSubtitle } from '../../selectors/inputs';
import { updateTitle, updateSubtitle } from '../../actions/inputs';
import Controls from '../../components/inputs/Controls';

const mapStateToProps = state => ({
  title: getTitle(state),
  subtitle: getSubtitle(state),
});

const mapDispatchToProps = dispatch => ({
  handleChange({ target }) {
    if(target.name === 'title') {
      dispatch(updateTitle(target.value));
    }
    if(target.name === 'subtitle') {
      dispatch(updateSubtitle(target.value));
    }
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Controls);
