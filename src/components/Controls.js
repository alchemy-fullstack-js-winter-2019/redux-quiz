import React from 'react';
import PropTypes from 'prop-types';

function Controls({ onChangeTop, onChangeBottom, topText, bottomText }) {
  return (
    <>
    <label>
        Top Text: 
      <input type="text" name="topText" value={topText} onChange={onChangeTop}/>
    </label>
    <label>
        Bottom Text: 
      <input type="text" name="bottomText" value={bottomText} onChange={onChangeBottom}/>
    </label>
    </>
  );
}

Controls.propTypes = {
  onChangeTop: PropTypes.func.isRequired,
  onChangeBottom: PropTypes.func.isRequired,
  topText: PropTypes.string.isRequired,
  bottomText: PropTypes.string.isRequired
};

export default Controls;
