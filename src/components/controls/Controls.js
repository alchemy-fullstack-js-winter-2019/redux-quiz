import React from 'react';
import PropTypes from 'prop-types';


export default function Controls({ title, subtitle, onChange }) {
    return (
        <>
        <input type="text" value={title} name='title' onChange={onChange}/>
        <input type="text" value={subtitle} name='subtitle' onChange={onChange}/>
        </>
    );
}

Controls.propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired
};

