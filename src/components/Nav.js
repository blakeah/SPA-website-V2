import {Routes, Route, Link} from 'react-router-dom'

function Nav() {
    return (

        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/people-page">People</Link></li>
                <li><Link to="/blog-page">Blog Page</Link></li>
                <li><Link to="/about-us">About Us</Link></li>
            </ul>
        </nav>

    );
};

export default Nav;
