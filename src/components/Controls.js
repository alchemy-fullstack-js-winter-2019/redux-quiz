import React from 'react';
import PropTypes from 'prop-types';

function Controls({ title, subtitle, onTitleChange, onSubtitleChange }) {
  return (
    <>
    <input onChange={onTitleChange} name={title} value={title}></input>
    <input onChange={onSubtitleChange} name={subtitle} value={subtitle}></input>
    </>
  );
}

Controls.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  onTitleChange: PropTypes.func.isRequired,
  onSubtitleChange: PropTypes.func.isRequired 
};

export default Controls;
