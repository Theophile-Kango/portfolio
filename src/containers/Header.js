import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLaptopCode } from '@fortawesome/free-solid-svg-icons';

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
                        <AnchorLink href='#about'>About</AnchorLink>
                    </li>
                    <li>
                        <AnchorLink href='#articles'>Articles</AnchorLink>
                    </li>
                    <li>
                        <AnchorLink href='#contact'>Contact</AnchorLink>
                    </li>
                    <li>
                        <AnchorLink href='#resume'>Resume</AnchorLink>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Header;