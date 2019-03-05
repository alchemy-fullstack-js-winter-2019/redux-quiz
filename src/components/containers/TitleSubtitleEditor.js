import { connect } from 'react-redux';
import Control from '../prensentational/Control';
import { getTitle } from '../selectors/titleSelector';
import { updateTitle } from '../actions/titleAction';

const mapStateToProps = state => ({
  markdown: getTitle(state)
});

const mapDispatchProps = (dispatch) => ({
  onChange({ target }) {
    const factoryCreate = {
      markdown: updateTitle
    };
    
    dispatch(factoryCreate[target.name](target.value));
  }
});

const TitleContainer = connect(
  mapStateToProps,
  mapDispatchProps
)(Control);

export default TitleContainer;
