import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './styles/projectStyles.module.scss';

const Project = ({ object }) => {
  const {
    title, details, tech, demo, image,
  } = object;
  const { src, imageTitle } = image;

  return (
    <article className={styles.project}>
      <div className={styles.media}>
        <img src={src} alt={imageTitle} />
      </div>
      <div className={styles.content}>
        <h3>{title}</h3>
        <p>{details}</p>
        <p className={styles.techLabel}>Built with</p>
        <ul className={styles.tech}>
          {tech.map(elt => (
            <li key={elt}>{elt}</li>
          ))}
        </ul>
        <div className={styles.links}>
          {demo.map(elt => (
            <a
              target="_blank"
              href={elt.link}
              key={elt.link}
              rel="noopener noreferrer"
              aria-label={`View ${title} live demo`}
            >
              <FontAwesomeIcon icon={elt.icon} />
            </a>
          ))}
        </div>
      </div>
    </article>
  );
};

Project.propTypes = {
  object: PropTypes.shape({
    title: PropTypes.string,
    details: PropTypes.string,
    tech: PropTypes.arrayOf(PropTypes.string),
    demo: PropTypes.arrayOf(PropTypes.shape({
      link: PropTypes.string,
      icon: PropTypes.instanceOf(Object),
    })),
    image: PropTypes.shape({
      src: PropTypes.string,
      imageTitle: PropTypes.string,
    }),
  }).isRequired,
};

export default Project;
