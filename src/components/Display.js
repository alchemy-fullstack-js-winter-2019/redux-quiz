import React from 'react';
import PropTypes from 'prop-types';
import styles from './app/App.css';

function Display({ title, subtitle }) {
  return (
    <>
      <img className={styles.image} src="http://cf.gatewaypeople.com/prod/s3fs-public/thumbnails/GOAT.jpg"/>
      <h1>{title}</h1>
      <h2>{subtitle}</h2>
    </>
  );
}

Display.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired
};

export default Display;
