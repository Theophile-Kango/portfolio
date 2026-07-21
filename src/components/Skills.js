import React from 'react';
import skills from '../constant/skills';
import styles from './styles/skillsStyles.module.scss';

const Skills = () => (
  <section id="skills" className={styles.skills}>
    <h2>Skills</h2>
    <ul>
      {skills.map(skill => (
        <li key={skill.link}>
          <a href={skill.link} target="_blank" rel="noopener noreferrer">
            {skill.tech}
          </a>
        </li>
      ))}
    </ul>
  </section>
);

export default Skills;
