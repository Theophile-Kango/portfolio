import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Project from '../components/Project';
import objects from '../constant/objects';
import styles from '../components/styles/portfolioStyles.module.scss';

AOS.init({
  offset: 400,
  delay: 0,
  duration: 1000,
});

const Portfolio = () => (
  <section id="portfolio" data-aos="fade-right" className={styles.portfolio}>
    <h1>Projects worked</h1>
    {
                objects.map(object => (
                  <Project key={object.title} object={object} />
                ))
            }
  </section>
);

export default Portfolio;
