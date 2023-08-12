import logo from './logo.svg';

import './components/styles/App.css';
import './components/styles/Cards.css';
import './components/styles/Navbar.css'
import Header from './components/Header.js'
import Nav from './components/Nav.js'
import Article from './components/Article.js'

import Promo from './components/Promo.js'
import Footer from './components/Footer.js'
import HomePage from './components/HomePage.js'
import AboutMe from './components/AboutMe.js'
import {Routes, Route, Link} from 'react-router-dom'




function App() {


  return (
    <div className = "App" >
    <Nav/>
    <Routes>
    <Route path="/" element={<HomePage/>} />
    <Route path="/about-me" element={<AboutMe/>} />
    </Routes>
    </div>
  )

}

export default App;
