import React from 'react';
import PropTypes from 'prop-types';

function Display({ topText, bottomText }) {
  return (
    <>
      <h1>{topText}</h1>
      <h2>{bottomText}</h2>
    </>
  );
}

Display.propTypes = {
  topText: PropTypes.string.isRequired,
  bottomText: PropTypes.string.isRequired
};

export default Display;
