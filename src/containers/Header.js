import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLaptopCode } from '@fortawesome/free-solid-svg-icons';
import Resume from '../img/Theophile-Kango-Resume.pdf';

const Header = () => {
    return (
        <div>
            <div>
                <FontAwesomeIcon icon={faLaptopCode} />
                <h1>Theophile Kango</h1>
            </div>
            <nav>
                <ul>
                    <li>
                        <AnchorLink href='#home'>Home</AnchorLink>
                    </li>
                    <li>
                        <AnchorLink href='#portfolio'>Portfolio</AnchorLink>
                    </li>
                    <li>
                        <AnchorLink href='#articles'>Articles</AnchorLink>
                    </li>
                    <li>
                        <AnchorLink href='#contact'>Contact</AnchorLink>
                    </li>
                    <li>
                        <a href={Resume} target="_blank" rel="noopener noreferrer" >Resume</a>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Header;