import React from 'react';
import PropTypes from 'prop-types';

export default function Display({ title, subtitle }) {
    return (
        <>
            <h1>{title}</h1>
            <h2>{subtitle}</h2>
        </>
    );
}

Display.propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired
};
