import React from 'react';
import PropTypes from 'prop-types';


function Controls({ title, subtitle, onChange }) {
  return (
    <>
  Enter Title:
      <input type='text' name="title" value={title} onChange={onChange} />
  Enter Subtitle:
      <input type="text" name="subtitle" value={subtitle} onChange={onChange} />
    </>
  );
}

Controls.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};

export default Controls;
