/* eslint-disable */
import React, { useState } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLaptopCode, faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import Resume from '../img/Theophile-Kango-Resume.pdf';
import styles from '../components/styles/headerStyles.module.scss';

const Header = () => {
  const [clicked, setClicked] = useState(false);

  return (
    <header className={styles.header}>
      <div>
        <FontAwesomeIcon icon={faLaptopCode} />
        <h1>Theophile Kango</h1>
      </div>
      <nav>
        <p className={styles.dNone} onClick={() => setClicked(!clicked)}>
          {clicked ? <FontAwesomeIcon icon={faTimes} /> : <FontAwesomeIcon icon={faBars} />}
        </p>

        <ul className={clicked ? null : styles.ulDNone}>
          <li>
            <AnchorLink href="#home">Home</AnchorLink>
          </li>
          <li>
            <AnchorLink href="#portfolio">Projects</AnchorLink>
          </li>
          <li>
            <AnchorLink href="#articles">Articles</AnchorLink>
          </li>
          <li>
            <AnchorLink href="#contact">Contact</AnchorLink>
          </li>
          <li>
            <a href={Resume} target="_blank" rel="noopener noreferrer">Resume</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
