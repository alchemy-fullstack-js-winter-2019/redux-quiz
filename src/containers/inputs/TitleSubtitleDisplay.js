import { connect } from 'react-redux';
import { getTitle, getSubtitle } from '../../selectors/inputs';
import Display from '../../components/inputs/Display';

const mapStateToProps = state => ({
  title: getTitle(state),
  subtitle: getSubtitle(state),
});

export default connect(
  mapStateToProps
)(Display);
