import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import NavBar from './components/Nav';
import Home from './components/Home';
import Articles from './components/Articles';
import Skills from './components/Skills';
import Socials from './components/Socials';
import Contact from './components/Contact';

ReactDOM.render(
    <Router>
        <NavBar/>
        <Routes>
            <Route path = "/"         element = { <Home/>     }/>
            <Route path = "/articles" element = { <Articles/> }/>
            <Route path = "/skills"   element = { <Skills/>   }/>
            <Route path = "/contact"  element = { <Contact/>  }/>
        </Routes>
        <Socials/>
    </Router>,
    document.getElementById('root')
);