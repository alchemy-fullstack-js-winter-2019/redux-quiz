import { connect } from 'react-redux';
import Controls from '../components/Controls';
import { getTitle, getSubTitle } from '../selectors/controls';
import { updateTitle, updateSubTitle } from '../actions/controls';

const factoryMethod = {
  title: updateTitle,
  subtitle: updateSubTitle
};

const mapStateToProps = state => ({
  title: getTitle(state),
  subtitle: getSubTitle(state)
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
