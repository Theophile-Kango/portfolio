import React from 'react';
import skills from '../constant/skills';
import styles from './styles/homeStyles.module.scss';

const Home = () => {
    
    return (
        <section id="home" className={styles.home} >
            <h1>Successful Full Stack Web Development</h1>
            <h3>
                Hi. I’m Theophile, a Full Stack Web Developer 
                with 1-year experience creating successful web applications with
            </h3> 
            <ul>
                {
                    skills.map(skill => (
                        <li key={skill.tech}>
                            <a 
                                href={skill.link}
                                target="_blank"
                                rel="noopener noreferrer"
                            > 
                                {skill.tech}
                            </a>
                        </li>
                    ))
                }
            </ul> 
            <p>Looking for new opportunities</p>
        </section>
    )
}

export default Home;
