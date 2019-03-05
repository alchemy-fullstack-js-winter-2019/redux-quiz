import React from 'react';
import PropTypes from 'prop-types';

function Controls({ title, subtitle, updateTitle, updateSubTitle }) {
  return (
    <>
      <input name="title" value={title} onChange={updateTitle}/>
      <input name="subtitle" value={subtitle} onChange={updateSubTitle} />
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
