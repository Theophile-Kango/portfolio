import React from 'react';
import styles from './styles/homeStyles.module.scss'

const Home = () => {
    return (
        <section id="home" className={styles.home} >
            <h1>Successful Full Stack Web Development</h1>
            <h3>
                Hi. I’m Theophile, a Full Stack Web Developer 
                with 1-year experience creating successful web applications with 
                
                <a 
                    href="https://www.ruby-lang.org/en/" 
                    target="_blank"
                    rel="noopener noreferrer"
                > 
                    Ruby 
                </a>
                <a 
                    href="https://rubyonrails.org/" 
                    target="_blank"
                    rel="noopener noreferrer"
                >  
                    Rails 
                </a>
                <a 
                    href="https://www.javascript.com/" 
                    target="_blank"
                    rel="noopener noreferrer"
                > 
                    JavaScript 
                </a>
                <a 
                    href="https://reactjs.org/" 
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    React
                </a>
                <a 
                    href="https://redux.js.org/" 
                    target="_blank"
                    rel="noopener noreferrer"
                > 
                    Redux 
                </a>
            </h3>
            <p>Looking for new opportunities</p>
        </section>
    )
}

export default Home;
