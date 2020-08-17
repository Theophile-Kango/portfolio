import React from 'react';
import Project from '../components/Project';
import objects from '../constant/objects';

const Portfolio = () => {

    return (
        <section id="portfolio">
            <h1>Full Stack Development Portfolio</h1>
            <h3>
                Succeed online with a website that is fast, easy to use, 
                and built with best practices and a passion for design.
            </h3>
            { 
                objects.map((object, i )=> (
                    <Project key={i} object={object} />
                ))
            }    
        </section>
    )
}

export default Portfolio;
