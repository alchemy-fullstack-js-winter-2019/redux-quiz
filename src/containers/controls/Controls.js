import { connect } from 'react-redux';
import Controls from '../../components/controls/Controls';
import { getTitle, getSubtitle } from '../../selectors/Controls';
import { updateTitle, updateSubtitle } from '../../actions/Controls';


const mapStateToProps = state => ({
    title: getTitle(state),
    subtitle: getSubtitle(state)

});

const makeDispatchToProps = dispatch => ({
    onChange({ target }) {
        const factoryMethod = {
            title: updateTitle,
            subtitle: updateSubtitle
        };
        dispatch(factoryMethod[target.name](target.value));
    }
});

export default connect(mapStateToProps, makeDispatchToProps)(Controls);
