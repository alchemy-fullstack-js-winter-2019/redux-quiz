import { connect } from 'react-redux';
import { getTitle, getSubtitle } from '../../selectors/Controls';
import Display from '../../components/display/Display';


const mapStateToProps = state => ({
    title: getTitle(state),
    subtitle: getSubtitle(state)
});


export default connect(mapStateToProps)(Display);
