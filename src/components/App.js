import React from 'react';
import './../App.css';
import Header from '../containers/Header';
import Home from './Home';
import About from './About';
import Articles from './Articles';
import Contact from './Contact';
import Portfolio from '../containers/Portfolio';
import Resume from './Resume';

const App = () => {
  return (
    <main className="App">
      <header>
        <Header />
      </header>
      <div>
        <Home />
        <Portfolio />
        <About />
        <Articles />
        <Resume />
        <Contact />
      </div>
    </main>
  );
}

export default App;
