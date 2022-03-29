import React from 'react';
import ReactDOM from 'react-dom';

import Home from './pages/Home';
import Blog from './pages/Blog';
import Skills from './pages/Skills';

function App() {
    var page = window.location.href.split("/").slice(-1)[0];
    if (page.length < 2) {
        return (
            <Home/>
        );
    } else if (page === "articles.html") {
        return (
            <Blog/>
        );
    } else if (page === "skills.html") {
        return (
            <Skills/>
        );
    }
}

ReactDOM.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>,
    document.getElementById('root')
);