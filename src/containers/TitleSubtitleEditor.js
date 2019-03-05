import { connect } from 'redux';
import Controls from '../components/Controls';
import { getSubtitle, getTitle } from '../selectors/TitleSubtitleEditor';

const mapStateToProps = state => ({
  title: getTitle(state),
  subtitle: getSubtitle(state)
});

const mapDispatchToProps = state => ({
  onChange({ target }) {
    
  }
});;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Controls);
