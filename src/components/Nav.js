import {Routes, Route, Link} from 'react-router-dom'

function Nav() {
    return (
      <header>
        <nav>
            <ul>
                <li><Link to="/">People Page</Link></li>
                <li><Link to="/about-me">Counter Page</Link></li>
                <li><Link to="/article">Article Page</Link></li>
            </ul>
        </nav>
      </header>
    );
};

export default Nav;
