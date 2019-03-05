import { connect } from 'react-redux';
import Controls from '../components/Controls';
import { getTitle, getSubtitle } from '../selectors/index';
import { updateTitle, updateSubTitle } from '../actions/index';

const factoryMethod = {
  title: updateTitle,
  subtitle: updateSubTitle
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

