import { connect } from 'react-redux';
import Display from '../components/Display';

const mapStateToProps = state => ({
    title: 'fake',
    subtitle: 'faker'
});

export default connect(
    mapStateToProps
)(Display);
