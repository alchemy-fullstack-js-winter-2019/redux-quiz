import React from 'react';
import PropTypes from 'prop-types';

function Display({ title, subTitle }) {
  return (
    <>
      <h1> {title} </h1>
      <h2> {subTitle} </h2>
    </>
  );
}

Display.propTypes =  {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string.isRequired
};

export default Display;
