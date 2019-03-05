import React from 'react';
import PropTypes from 'prop-types';
import styles from './app/App.css';

function Display({
  title,
  subtitle
}) {
  return (
    <div className={styles.display}>
      <h1>{title}</h1>
      <h2>{subtitle}</h2>
    </div>
  );
}

Display.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired
};

export default Display;
