import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Project from '../components/Project';
import objects from '../constant/objects';
import styles from '../components/styles/portfolioStyles.module.scss';

AOS.init({
  offset: 150,
  delay: 0,
  duration: 600,
});

const Portfolio = () => (
  <section id="portfolio" className={styles.portfolio}>
    <h2>My recent work</h2>
    <div className={styles.grid}>
      {objects.map((object, i) => (
        <div key={object.title} data-aos="fade-up" data-aos-delay={i * 100}>
          <Project object={object} />
        </div>
      ))}
    </div>
  </section>
);

export default Portfolio;
