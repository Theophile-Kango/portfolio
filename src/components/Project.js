import React from 'react';
import PropTypes from 'prop-types';

const Project = ({ title, details, tech, demo, image }) => {
    const {src, title} = image;
    return (
        <article>
            <h3>{title}</h3>
            <p>{details}</p>
            {
                tech.map(elt => (
                    <button key={elt}>{elt}</button>
                ))     
            }
            {
                demo.map(elt => (
                    <p key={elt}>{elt}</p>
                ))
            }
            <img src={src} alt={title} />
        </article>
    )
};


Project.propTypes = {
    title: PropTypes.string,
    details: PropTypes.string,
    tech: PropTypes.instanceOf(Array),
    demo: PropTypes.instanceOf(Array),
    image: PropTypes.instanceOf(Object)
}.isRequired;

export default Project;
