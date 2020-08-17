import React from 'react';
import Project from '../components/Project';
import { faCode } from '@fortawesome/free-solid-svg-icons';
import { faVideo } from '@fortawesome/free-solid-svg-icons';
import { faLink } from '@fortawesome/free-solid-svg-icons';
import CoursesTrack from '../img/courses-track.jpg';

const Portfolio = () => {
    const object = [{
        title: 'Courses Track App',
        details: 'The project is about grouping hours spent on different courses at the University with a mobile web app',
        tech: ['Ruby On Rails','HTML5','SCSS'],
        demo: [{
            link: 'https://github.com/Theophile-Kango/group_our_transactions',
            icon: faCode,
        },
        {
            link: 'https://www.youtube.com/watch?v=pP40lWlStKE&feature=youtu.be',
            icon: faVideo,
        },
        {
            link: 'https://courses-track.herokuapp.com/',
            icon: faLink,
        }
    ],
        image: {
            src: CoursesTrack,
            imageTitle: 'courses-track'
        }
    }]
    return (
        <section id="portfolio">
            <h1>Full Stack Development Portfolio</h1>
            <h3>Succeed online with a website that is fast, easy to use, and built with best practices and a passion for design.</h3>
            <Project object={object[0]} />
        </section>
    )
}

export default Portfolio;
