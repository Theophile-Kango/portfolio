import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import Home from './Home';

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
                        Portfolio
                    </li>
                    <li>
                        <a>About</a>
                    </li>
                    <li>
                        <a>Articles</a>
                    </li>
                    <li>
                        <a>Contact</a>
                    </li>
                    <li>
                        <a>Resume</a>
                    </li>
                </ul>
            </nav>
            <div id="home">
                <Home />
            </div>
        </div>
    )
}

export default Header;