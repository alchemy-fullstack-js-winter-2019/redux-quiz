import React from 'react';
import PropTypes from 'prop-types';
import styles from './app/App.css';

function Controls({ title, subtitle, onChange }) {
  return (
    <div className={styles.controls}>
      <label>
      Title: 
        <input type="text" name="title" value={title} onChange={onChange} />
      </label>
      <label>
      Subtitle: 
        <input type="text" name="subtitle" value={subtitle} onChange={onChange} />
      </label>
    </div>
  );
}

Controls.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};

export default Controls;
