import { connect } from 'react-redux';
import Controls from '../components/Controls';
import { getTitle, getSubTitle } from '../selectors/titleSubtitleSelectors';
import { updateTitle, updateSubtitle } from '../actions/titleSubtitle';


const mapStateToProps = state => ({
  title: getTitle(state),
  subtitle: getSubTitle(state)
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

export default connect (
  mapStateToProps,
  mapDispatchToProps
)(Controls);
