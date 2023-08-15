import {Routes, Route, Link} from 'react-router-dom'

function Nav() {
    return (
      <header>
        <nav>
            <ul>
                <li><Link to="/">Home Page</Link></li>
                <li><Link to="/people-page">People Page</Link></li>
                <li><Link to="/about-me">AboutMe</Link></li>
                <li><Link to="/blog-page">Blog Page</Link></li>
            </ul>
        </nav>
      </header>
    );
};

export default Nav;
