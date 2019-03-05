import React from 'react';
import PropTypes from 'prop-types';

function Controls({ onChange, topText, bottomText }) {
  return (
    <>
    <label>
        Top Text: 
      <input type="text" name="topText" value={topText} onChange={onChange}/>
    </label>
    <label>
        Bottom Text: 
      <input type="text" name="bottomText" value={bottomText} onChange={onChange}/>
    </label>
    </>
  );
}

Controls.propTypes = {
  onChange: PropTypes.func.isRequired,
  topText: PropTypes.string.isRequired,
  bottomText: PropTypes.string.isRequired
};

export default Controls;
