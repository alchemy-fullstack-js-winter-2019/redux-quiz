import React from 'react';
import PropTypes from 'prop-types';

function Display({ title, subtitle }) {
  return (
    <>
    <h1 name={title} value={title}></h1>
    <h2 name={subtitle} value={subtitle}></h2>
    </>
  );
}

Display.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired
};

export default Display;
