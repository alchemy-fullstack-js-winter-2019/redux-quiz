import { connect } from 'react-redux';
import ControlsForm from '../../components/Controls';
import { getTitle, getSubtitle } from '../../selectors/header';
import { updateTitle, updateSubtitle } from '../../actions/header';

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
