import { connect } from 'react-redux';
import Header from '../components/Header';
import { getTitle, getSubtitle } from '../selectors/index';

const mapStateToProps = state => ({
  title: getTitle(state),
  subtitle: getSubtitle(state)
});

export default connect(
  mapStateToProps
)(Header);
