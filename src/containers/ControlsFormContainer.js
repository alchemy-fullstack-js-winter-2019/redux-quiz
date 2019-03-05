import { connect } from 'react-redux';
import ControlsForm from '../components/controls/ControlsForm';
import { getTitle, getSubtitle } from '../selectors/controls';
import { updateTitle, updateSubtitle } from '../actions/controls';

const factoryMethod = {
  title: updateTitle,
  subtitle: updateSubtitle
};

const mapStateToProps = state => ({
  title: getTitle(state),
  subtitle: getSubtitle(state)
});

const mapDispatchToProps = dispatch => ({
  onChange({ target }) {
    dispatch(factoryMethod[target.name](target.value));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps 
)(ControlsForm);
