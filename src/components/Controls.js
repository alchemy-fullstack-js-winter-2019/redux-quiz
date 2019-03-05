import React from 'react';
import PropTypes from 'prop-types';

function Controls({ title, subtitle, onChange }) {
  return (
    <>
    <input onChange={onChange} name={title} value={title}></input>
    <input onChange={onChange} name={subtitle} value={subtitle}></input>
    </>
  );
}

Controls.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};

export default Controls;
