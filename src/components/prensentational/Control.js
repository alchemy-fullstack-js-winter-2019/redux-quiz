import React from 'react';
import PropTypes from 'prop-types';

function Control({ title, onChange, subTitle }) {
  return (
    <>
    <label> Title </label>
    <input name="title" value={title} type="text" onChange={onChange} />
    <label> Subtitle </label>
    <input name="subTitle" value={subTitle} type="text" onChange={onChange} />
    </>
  );
}

Control.propTypes =  {
  title: PropTypes.string,
  onChange: PropTypes.func,
  subTitle: PropTypes.string
};

export default Control;
