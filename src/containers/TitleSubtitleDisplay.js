import { connect } from 'react-redux';
import Display from '../components/Display';
import { getSubTitle } from '../selectors/titleSubtitleSelectors';
import { getTitle, getSubTitle } from '../selectors/titleSubtitleSelectors';

const mapStateToProps = state => ({
  title: getTitle(state),
  subtitle: getSubTitle(state)
});

export default connect (
  mapStateToProps,
);

