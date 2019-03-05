import React from 'react';
import PropTypes from 'prop-types';

function Control({ title, onChange, subtitle }) {
  return (
    <>
    <label> Title </label>
    <input name="title" value={title} type="text" onChange={onChange} />
    <label> Subtitle </label>
    <input name="subtitle" value={subtitle} type="text" onChange={onChange} />
    </>
  );
}

Control.propTypes =  {
  title: PropTypes.string,
  onChange: PropTypes.func,
  subtitle: PropTypes.string
};

export default Control;
