import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Project =  ( {object} ) => {
    const { title, details, tech, demo, image } = object;
    const { src, imageTitle} = image;
 
    return (
        <article>
            <h3>{title}</h3>
            <p>{details}</p>
            {tech.map(elt => (
                <button key={elt}>{elt}</button>
            ))}
            {
                demo.map( elt => (
                    <a 
                        target="_blank" 
                        href={elt.link}
                        key={elt.link}
                        rel="noopener noreferrer"
                    >
                        <FontAwesomeIcon icon={elt.icon} />
                    </a>
                ))
            }
            <img src={src} alt={imageTitle} />
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
