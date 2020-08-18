import React from 'react';
import styles from './styles/homeStyles.module.scss'

const Home = () => {
    return (
        <section id="home" className={styles.section} >
            <h1>Successful Full Stack Web Development</h1>
            <h3>
                Hi. I’m Theophile, a Full Stack Web Developer 
                with 1-year experience creating successful web applications with 
                <span>Ruby </span>
                <span>Ruby On Rails </span>
                <span>JavaScript </span>
                <span>React|Redux</span>
            </h3>
            <p>Looking for new opportunities</p>
        </section>
    )
}

export default Home;
