import React from 'react';
import styles from './styles/articleStyles.module.scss';

const Articles = () => (
  <section id="articles" className={styles.articles}>
    <h1>Articles</h1>

    <a
      href="https://hackernoon.com/uploading-files-into-ruby-on-rails-activestorage-gv1r3ukr"
      target="_blank"
      rel="noopener noreferrer"
    >
      Uploading Files Into Ruby On Rails ActiveStorage
    </a>

    <a
      href="https://hackernoon.com/flexbox-vs-css-grid-or-what-should-you-use-as-basic-css-layout-2aai36fm"
      target="_blank"
      rel="noopener noreferrer"
    >
      Flexbox Vs. CSS Grid or What Should You Use as Basic CSS Layout
    </a>

  </section>
);

export default Articles;
