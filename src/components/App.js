import React from 'react';
import './../App.css';
import Header from '../containers/Header';
import Home from './Home';
import Articles from './Articles';
import Contact from './Contact';
import Portfolio from '../containers/Portfolio';

const App = () => {
  return (
    <main className="App">
      <Header />
      <div>
        <Home />
        <Portfolio />
        <Articles />
        <Contact />
      </div>
    </main>
  );
}

export default App;
