import { connect } from 'react-redux';
import Controls from '../components/Controls';
import { getTitle, getSubtitle } from '../selectors/titles';
import { updateTitle, updateSubtitle } from '../actions/titles';

const mapStateToProps = state => ({
  title: getTitle(state),
  subtitle: getSubtitle(state)
});

const mapDispatchToProps = dispatch => ({
  onChange({ target }) {
    const factoryMethod = {
      title: updateTitle,
      subtitle: updateSubtitle
    };
    dispatch(factoryMethod[target.name](target.value));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Controls);
