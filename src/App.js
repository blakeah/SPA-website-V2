import { CssBaseline } from "@mui/material";
import logo from './logo.svg';
import './components/styles/App.css';
import './components/styles/Cards.css';
import './components/styles/Navbar.css'
import Nav from './components/Nav.js'
import BlogPage from './components/BlogPage.js'
import Promo from './components/Promo.js'
import Footer from './components/Footer.js'
import PeoplePage from './components/PeoplePage.js'
import PersonDetail from './components/PersonDetail.js'
import HomePage from './components/HomePage.js'
import AboutMe from './components/AboutMe.js'
import {Routes, Route, Link} from 'react-router-dom'
import people from './data/people.json'




function App() {

  return (
    <div className = "App" >
    <Nav/>
    <Routes>
    <Route path="/" element={<HomePage/>} />
    <Route path="/people-page" element={<PeoplePage/>} />
    <Route path="/people-page/:id" element={<PersonDetail />} />
    <Route path="/blog-page" element={<BlogPage/>} />
    <Route path="/about-me" element={<AboutMe/>} />
    </Routes>
    </div>
  )

}

export default App;
