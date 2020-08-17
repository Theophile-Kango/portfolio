import React from 'react';
import './../App.css';
import Header from '../container/Header';
import Home from './Home';
import About from './About';
import Articles from './Articles';
import Contact from './Contact';
import Portfolio from './Portfolio';
import Resume from './Resume';

const App = () => {
  return (
    <div className="App">
      <Header />
      <section id="home">
        <Home />
      </section>
      <section id="portfolio">
        <Portfolio />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="article">
        <Articles />
      </section>
      <section id="resume">
        <Resume />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </div>
  );
}

export default App;
