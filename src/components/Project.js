import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AOS from "aos";
import "aos/dist/aos.css";
import styles from "./styles/projectStyles.module.scss";

AOS.init({
  offset: 400,
  delay: 0,
  duration: 1000,
});

const Project = ({ object }) => {
  const { title, details, tech, demo, image } = object;
  const { src, imageTitle } = image;

  return (
    <article className={styles.project}>
      <div>
        <img src={src} alt={imageTitle} />
      </div>
      <div>
        <h3>{title}</h3>
        <p>{details}</p>
        <h4>
          Built with:
          {tech.map((elt) => (
            <span key={elt}>{elt}</span>
          ))}
        </h4>
        {demo.map((elt) => (
          <a
            target="_blank"
            href={elt.link}
            key={elt.link}
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={elt.icon} />
          </a>
        ))}
      </div>
    </article>
  );
};

Project.propTypes = {
  title: PropTypes.string,
  details: PropTypes.string,
  tech: PropTypes.instanceOf(Array),
  demo: PropTypes.instanceOf(Array),
  image: PropTypes.instanceOf(Object),
}.isRequired;

export default Project;
