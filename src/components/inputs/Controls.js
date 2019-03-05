import React from 'react';
import PropTypes from 'prop-types';

const Controls = ({ title, subtitle, handleChange }) => {
  return (
    < >
      <label htmlFor="title">
        Enter a title:<br/>
        <input name="title"
          value={title}
          onChange={handleChange}
        />
      </label>
      <br/>
      <label htmlFor="subtitle">
        Enter a subtitle:<br/>
        <input name="subtitle"
          value={subtitle}
          onChange={handleChange}
        />
      </label>
    </>
  );
};

Controls.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired
};

export default Controls;
