import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import contacts from '../constant/contacts';
import styles from './styles/contactStyles.module.scss';

const Contact = () => (
  <section id="contact" className={styles.contact}>
    <ul>
      {
                    contacts.map(contact => (
                      <li key={contact.link}>
                        <a
                          href={contact.link}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <FontAwesomeIcon icon={contact.icon} />
                        </a>
                      </li>
                    ))
                }
    </ul>
    <p>By Theophile Kango &copy; 2020</p>
  </section>
);

export default Contact;
