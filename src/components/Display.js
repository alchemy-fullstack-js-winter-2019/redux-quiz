import React from 'react';
import PropTypes from 'prop-types';

function Display({ title, subtitle }) {
    return (
        <>
            <h1>{title}</h1>
            <h4>{subtitle}</h4>
        </>
    );
}

Display.propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string
};

export default Display;
