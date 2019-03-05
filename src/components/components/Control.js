import React from 'react';
import PropTypes from 'prop-types';

function Control({ title, onChange, subtitle }) {
  return (
    <>
    <label> Title </label>
    <input name="title" value={title} title={title} type="text" onChange={onChange} />
    <label> Subtitle </label>
    <input name="subtitle" value={subtitle} subtitle={subtitle} type="text" onChange={onChange}/>
    </>
  );
}

Control.propTypes =  {
  title: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  subtitle: PropTypes.string.isRequired
};

export default Control;
