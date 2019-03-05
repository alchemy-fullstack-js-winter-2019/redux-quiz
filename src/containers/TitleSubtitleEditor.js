import { connect } from 'react-redux';
import { getTitle, getSubtitle } from '../selectors/selector'
import { updateTitle, updateSubtitle } from '../actions/action';
import Controls from '../components/Controls';

const factoryMethod = {
    title: updateTitle,
    subtitle: updateSubtitle
  };

const mapStateToProps = state => ({
    title: getTitle(state),
    subtitle: getSubtitle(state)
})

const mapDispatchToProps = dispatch => ({
    onChange({ target }) {
        dispatch(factoryMethod[target.name](target.value));
    }
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Controls);
