import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import contacts from '../constant/contacts'

const Contact = () => {
    
    return (
        <section id="contact">
            <h1>Contact</h1>
            <ul>
                {
                    contacts.map((contact, i ) => ( 
                        <li key={i}>
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
        </section>
    )
}

export default Contact;
