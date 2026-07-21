import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import articles from '../constant/articles';
import styles from './styles/articleStyles.module.scss';

const Articles = () => (
  <section id="articles" className={styles.articles}>
    <h2>Articles</h2>
    <div className={styles.list}>
      {articles.map(article => (
        <a
          className={styles.card}
          key={article.link}
          href={article.link}
          target="_blank"
          rel="noopener noreferrer"
        >
          <span>{article.title}</span>
          <FontAwesomeIcon icon={faArrowRight} />
        </a>
      ))}
    </div>
  </section>
);

export default Articles;
