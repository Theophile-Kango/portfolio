import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';

const Header = () => {
    return (
        <div>
            <h1>Theophile Kango</h1>
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