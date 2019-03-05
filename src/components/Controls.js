import React from 'react';
import PropTypes from 'prop-types';

function Controls({ title, subtitle, updateTitle, updateSubTitle }) {
  return (
    <>
      <p>Title: <input name="title" value={title} onChange={updateTitle}/></p>
      <p>Subtitle: <input name="subtitle" value={subtitle} onChange={updateSubTitle}/></p>
    </>
  );
}

Controls.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  updateTitle: PropTypes.func.isRequired,
  updateSubTitle: PropTypes.func.isRequired
};

export default Controls;
