import React from 'react';
import PropTypes from 'prop-types';

function Controls({ title, subtitle, onChange }) {
  return (
    <>
      <input name='title' value={title} onChange={onChange} />
      <input name='subtitle' value={subtitle} onChange={onChange} />
    </>
  );
}

Controls.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Controls;
