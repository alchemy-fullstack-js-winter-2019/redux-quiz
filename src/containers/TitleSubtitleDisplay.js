import { connect } from 'react-redux';
import Controls from '../components/controls/Controls';
import { getTitle, getSubtitle } from '../selectors/Selector';
import { updateTitle, updateSubtitle } from '../actions/Action';

const mapStateToProps = state => ({
  title: getTitle(state),
  subtitle: getSubtitle(state)
});

const mapDispatchToProps = dispatch => ({
  onChange({ target }) {
    dispatch([target.name](target.value));

    const updateFn = [target.name];
    const action = updateFn(target.value);
    dispatch(action);

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
