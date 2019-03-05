import { connect } from 'react-redux';
import Controls from '../components/controls/Controls';
import { updateTitle, updateSubtitle } from '../actions/controls';
import { getTitle, getSubtitle } from '../selectors/controls';

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
)(Controls);
