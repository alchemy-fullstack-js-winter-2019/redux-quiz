import React from 'react';
import PropTypes from 'prop-types';

function Controls({ title, subtitle }) {
  return (
    <>
    <h1>{title}</h1>
    <h2>{subtitle}</h2>
    </>
  );
}
Controls.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle : PropTypes.string
};

export default Controls;
