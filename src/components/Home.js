import React from 'react';
import styles from './styles/homeStyles.module.scss';
import Contact from './Contact';

const Home = () => (
  <section className={styles.home} id="home">
    <div className={styles.card}>
      <p className={styles.eyebrow}>Hi, I&apos;m Theophile</p>
      <h1>Full-Stack Software Developer</h1>
      <p className={styles.bio}>
        Certified web developer who specializes in working with Ruby, Rails,
        JavaScript, TypeScript, React, Redux and NextJS. Currently exploring full-stack remote
        development opportunities
      </p>
      <Contact />
    </div>
  </section>
);

export default Home;
