import React from 'react';
import '../App.css';
import Header from '../containers/Header';
import Home from './Home';
import Skills from './Skills';
import Articles from './Articles';
import Footer from './Footer';
import Portfolio from '../containers/Portfolio';

const App = () => (
  <main className="App">
    <Header />
    <div>
      <Home />
      <Skills />
      <Portfolio />
      <Articles />
      <Footer />
    </div>
  </main>
);

export default App;
