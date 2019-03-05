import React from 'react';
import PropTypes from 'prop-types';


export default function Controls({ title, subtitle, onChange }) {
    return (
        <>
        <label>Title: 
            <input type="text" value={title} name='title' onChange={onChange}/>
        </label>
        <label>Subtitle: 
            <input type="text" value={subtitle} name='subtitle' onChange={onChange}/>
        </label>
        </>
    );
}

Controls.propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired
};

