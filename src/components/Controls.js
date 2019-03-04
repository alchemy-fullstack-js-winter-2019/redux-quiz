import React from 'react';
import PropTypes from 'prop-types';

function Controls({ title, subtitle }) {
  return (
    <>
    <input name={title} value={title}></input>
    <input name={subtitle} value={subtitle}></input>
    </>
  );
}

Controls.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired
};

export default Controls;
