import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Project from "../components/Project";
import objects from "../constant/objects";
import styles from "../components/styles/portfolioStyles.module.scss";

AOS.init({
  offset: 400,
  delay: 0,
  duration: 1000,
});

const Portfolio = () => (
  <section id="portfolio" data-aos="fade-right" className={styles.portfolio}>
    <h1>My recent work</h1>
    {objects.map((object, i) => (
      <div data-aos={i % 2 === 0 ? "fade-left" : "fade-right"}>
        <Project key={object.title} object={object} />
      </div>
    ))}
  </section>
);

export default Portfolio;
