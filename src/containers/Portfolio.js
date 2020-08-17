import React from 'react';
import Project from '../components/Project';
import { faCode } from '@fortawesome/free-solid-svg-icons';
import { faVideo } from '@fortawesome/free-solid-svg-icons';
import { faLink } from '@fortawesome/free-solid-svg-icons';
import CoursesTrack from '../img/courses-track.jpg';
import FamilyMovies from '../img/family-movies.png';
import NewsWeek from '../img/news-week.png';

const Portfolio = () => {
    const objects = [
        {
            title: 'Courses Track App',
            details: `The project is about grouping hours spent on different courses 
            at the University with a mobile web app`,
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
                imageTitle: 'Courses Track'
            }
        },
        {
            title: 'Family Movies',
            details: `Family Movies Catalogue is a catalogue of some movies with the family theme, 
            that is, a browsable and the list of items can be 
            filtered by the production year and accessed to the details of each item`,
            tech: ['React','Redux','NodeJS','ES6','SCSS'],
            demo: [{
                    link: 'https://github.com/Theophile-Kango/family-movies-catalogue',
                    icon: faCode,
                },
                {
                    link: 'https://www.loom.com/share/6968264108d94ceb967648e8a3f40b2c',
                    icon: faVideo,
                },
                {
                    link: 'https://family-movies-catalogue.netlify.app/',
                    icon: faLink,
                }
            ],
            image: {
                src: FamilyMovies,
                imageTitle: 'Family Movies'
            }
        },
        {
            title: 'News Week',
            details: `Building a web page that is similar to the newsweek web page 
                with responsive web design`,
            tech: ['HTML5','CSS3','Bootstrap 4'],
            demo: [{
                    link: 'https://github.com/Theophile-Kango/newsweek',
                    icon: faCode,
                },
                {
                    link: 'https://theophile-kango.github.io/newsweek/',
                    icon: faLink,
                }
            ],
            image: {
                src: NewsWeek,
                imageTitle: 'News Week'
            }
        }
    ]
    return (
        <section id="portfolio">
            <h1>Full Stack Development Portfolio</h1>
            <h3>Succeed online with a website that is fast, easy to use, and built with best practices and a passion for design.</h3>
            { objects.map((object, i )=> (
                <Project key={i} object={object} />
            ))}    
        </section>
    )
}

export default Portfolio;
