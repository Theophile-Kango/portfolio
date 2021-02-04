import { faCode, faVideo, faLink } from "@fortawesome/free-solid-svg-icons";
import CoursesTrack from "../img/courses-track.png";
import FamilyMovies from "../img/family-movies.png";
import NewsWeek from "../img/news-week.png";
import SpaceShooterGame from "../img/space-shooter-game.png";
import TelegramBot from "../img/telegram-bot.png";

const objects = [
  {
    title: "Courses Track App",
    details: `The project is about grouping hours spent on different courses 
        at the University with a mobile web app`,
    tech: ["Ruby on Rails", "HTML5", "SCSS"],
    demo: [
      {
        link: "https://github.com/Theophile-Kango/group_our_transactions",
        icon: faCode,
      },
      {
        link: "https://www.youtube.com/watch?v=pP40lWlStKE&feature=youtu.be",
        icon: faVideo,
      },
      {
        link: "https://courses-track.herokuapp.com/",
        icon: faLink,
      },
    ],
    image: {
      src: CoursesTrack,
      imageTitle: "Courses Track",
    },
  },
  {
    title: "Family Movies",
    details: `A responsive catalogue of family-friendly movies that allows 
      users to filter and pull up movie details using the IMDB API`,
    tech: ["React", "Redux", "Node.js", "SCSS"],
    demo: [
      {
        link: "https://github.com/Theophile-Kango/family-movies-catalogue",
        icon: faCode,
      },
      {
        link: "https://www.loom.com/share/6968264108d94ceb967648e8a3f40b2c",
        icon: faVideo,
      },
      {
        link: "https://family-movies-catalogue.netlify.app/",
        icon: faLink,
      },
    ],
    image: {
      src: FamilyMovies,
      imageTitle: "Family Movies",
    },
  },
  {
    title: "News Week",
    details: `Building a web page that is similar to the newsweek web page 
            with responsive web design`,
    tech: ["HTML5", "CSS3", "Bootstrap 4"],
    demo: [
      {
        link: "https://github.com/Theophile-Kango/newsweek",
        icon: faCode,
      },
      {
        link: "https://theophile-kango.github.io/newsweek/",
        icon: faLink,
      },
    ],
    image: {
      src: NewsWeek,
      imageTitle: "News Week",
    },
  },
  {
    title: "Space Shooter Game",
    details: `This project is about the implementation of a space mission 
        where the player's goal is to prevent meteors from reaching the earth`,
    tech: ["JavaScript", "webpack", "Node.js", "Phaser 3"],
    demo: [
      {
        link: "https://github.com/Theophile-Kango/space-shooter-game",
        icon: faCode,
      },
      {
        link: "https://space-game-mission.netlify.app/",
        icon: faLink,
      },
    ],
    image: {
      src: SpaceShooterGame,
      imageTitle: "Space Shooter Game",
    },
  },
  {
    title: "Telegram Bot",
    details: `This project is about a telegram bot that can help you with corona-virus info
        with each given Country`,
    tech: ["Ruby"],
    demo: [
      {
        link: "https://github.com/Theophile-Kango/ruby_capston_project",
        icon: faCode,
      },
      {
        link: "https://youtu.be/q4V9cXcDkII",
        icon: faVideo,
      },
      {
        link: "https://t.me/covidis_info_bot",
        icon: faLink,
      },
    ],
    image: {
      src: TelegramBot,
      imageTitle: "Telegram Bot",
    },
  },
];

export default objects;
