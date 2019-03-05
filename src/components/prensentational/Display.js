import React from 'react';
import PropTypes from 'prop-types';

function Display({ title, subtitle }) {
  return (
    <>
      <h1> {title} </h1>
      <h3> {subtitle} </h3>
    </>
  );
}

Display.propTypes =  {
  title: PropTypes.string,
  subtitle: PropTypes.string
};

export default Display;
