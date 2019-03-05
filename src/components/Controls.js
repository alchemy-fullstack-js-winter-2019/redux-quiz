import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

function Controls({ title, subtitle, onChange }) {
  return (
    <Fragment>
      <label>Title:
        <input type="text" name="title" value={title} onChange={onChange} />
      </label>

      <label>Subtitle:
        <input type="text" name="subtitle" value={subtitle} onChange={onChange} />
      </label>
    </Fragment>
  );
}

Controls.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};

export default Controls;