import React from 'react';
import styles from './styles/homeStyles.module.scss';
import Contact from './Contact';

const Home = () => (
  <section className={styles.home} id="home">
    <div />
    <h1>Hi, I&apos;m Theophile</h1>
    <h3>Full-Stack Software Developer</h3>
    <p>
      Certified web developer who specializes in working with Ruby, Rails,
      React, Javascript and Redux. Currently exploring front-end remote
      development opportunities
    </p>
    <div />
    <Contact />
  </section>
);

export default Home;
