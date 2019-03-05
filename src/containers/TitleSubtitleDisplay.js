import { connect } from 'react-redux';
import Display from '../../components/Display';
import { getTitle, getSubtitle } from '../../selectors/header';

// map redux state to component props
const mapStateToProps = state => ({
  title: getTitle(state),
  subtitle: getSubtitle(state)
});

// const mapDispatchToProps = dispatch => ({

// });

export default connect(
  mapStateToProps,
  // mapDispatchToProps
)(Display);
