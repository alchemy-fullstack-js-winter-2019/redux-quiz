import React from 'react';
import PropTypes from 'prop-types';

function Controls({ title, subtitle, onChange }) {
    return (
        <>
            <input type='text' value={title} onChange={onChange} name='title' />
            <input type='text' value={subtitle} onChange={onChange} name='subtitle'/>
        </>
    );
}

Controls.propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string,
    onChange: PropTypes.func.isRequired
};

export default Controls;


