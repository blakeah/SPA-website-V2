import {Routes, Route, Link} from 'react-router-dom'

function Nav() {
    return (
      <header>
        <nav>
            <ul>
                <li><Link to="/">Page 1</Link></li>
                <li><Link to="/about-me">Page 2</Link></li>
            </ul>
        </nav>
      </header>
    );
};

export default Nav;
