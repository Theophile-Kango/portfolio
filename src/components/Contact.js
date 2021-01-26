import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import contacts from "../constant/contacts";
import styles from "./styles/contactStyles.module.scss";

const Contact = () => (
  <ul className={styles.contact}>
    {contacts.map((contact) => (
      <li key={contact.link}>
        <a href={contact.link} target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={contact.icon} />
        </a>
      </li>
    ))}
  </ul>
);

export default Contact;
