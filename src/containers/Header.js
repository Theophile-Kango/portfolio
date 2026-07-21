import React, { useState, useEffect } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faLaptopCode,
  faBars,
  faTimes,
  faSun,
  faMoon,
} from '@fortawesome/free-solid-svg-icons';
import Resume from '../img/Theophile-Kango-Resume.pdf';
import styles from '../components/styles/headerStyles.module.scss';

const getInitialTheme = () => {
  const stored = window.localStorage.getItem('theme');
  if (stored === 'light' || stored === 'dark') return stored;
  const prefersDark = typeof window.matchMedia === 'function'
    && window.matchMedia('(prefers-color-scheme: dark)').matches;
  return prefersDark ? 'dark' : 'light';
};

const Header = () => {
  const [clicked, setClicked] = useState(false);
  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    window.localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <header className={styles.header}>
      <div>
        <FontAwesomeIcon icon={faLaptopCode} />
        <h1>Theophile Kango</h1>
      </div>
      <nav>
        <button
          type="button"
          className={styles.themeToggle}
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          aria-label={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
        >
          <FontAwesomeIcon icon={theme === 'dark' ? faSun : faMoon} />
        </button>

        <button
          type="button"
          className={styles.dNone}
          onClick={() => setClicked(!clicked)}
          aria-label={clicked ? 'Close menu' : 'Open menu'}
          aria-expanded={clicked}
        >
          {clicked ? (
            <FontAwesomeIcon icon={faTimes} />
          ) : (
            <FontAwesomeIcon icon={faBars} />
          )}
        </button>

        <ul className={clicked ? null : styles.ulDNone}>
          <li>
            <AnchorLink href="#home">Home</AnchorLink>
          </li>
          <li>
            <AnchorLink href="#skills">Skills</AnchorLink>
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
            <a href={Resume} target="_blank" rel="noopener noreferrer">
              Resume
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
