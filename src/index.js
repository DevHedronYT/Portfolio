import React, { useState } from 'react';
import ReactDOM from 'react-dom';

import get_json_obj_from_link from './get_json';
import GProj from './components/GithubProject';
import './index.css';

const all_repos = get_json_obj_from_link("https://api.github.com/users/DevHedronYT/repos");

function App() {
    const [projects, setProjects] = useState([]);

    all_repos.then((value) => {
        setProjects(value);
    })

    var i, j, tmp_var;
    for (i = 0; i < projects.length - 1; i++) {
        for (j = 0; j < projects.length - i - 1; j++) {
            if (projects[j + 1].stargazers_count > projects[j].stargazers_count) {
                tmp_var = projects[j];
                projects[j] = projects[j + 1];
                projects[j + 1] = tmp_var;
            }
        }
    }
    // get top 3 projects
    while (projects.length > 3) {
        projects.pop();
    }

    return (
        <div className = "App"> 
            <img alt = "icon" src = "res/hedron.jpg"></img>

            <h1 className = "section">DevHedron</h1>
            <h5 id = "captions">Student & Hobbyist Game Dev</h5>

            <div className="about">
                <p> 
                    Hi! I'm DevHedron, I am a hobbyist programmer who has been 
                    programming for 3 years now. I am experienced mainly in C
                    and Python but I can do a bit of web development as well
                    with Javascript, HTML and CSS. 
                </p>
            </div>

            <h1 className = "section">itch.io Projects</h1>
            <iframe title = "astober" frameBorder="0" src="https://itch.io/embed/1237119?border_width=2&amp;dark=true" width="200" height="169"><a href="https://devhedronyt.itch.io/astober">Astober by DevHedronYT</a></iframe>
            <iframe title = "protect-the-square" frameBorder="0" src="https://itch.io/embed/1169209?border_width=2&amp;dark=true" width="200" height="169"><a href="https://devhedronyt.itch.io/protect-the-square">Protect The Square by DevHedronYT</a></iframe>
            <iframe title = "click-and-destroy" frameBorder="0" src="https://itch.io/embed/929491?border_width=2&amp;dark=true" width="200" height="169"><a href="https://devhedronyt.itch.io/clickdestroy">Click &amp; Destroy by DevHedronYT</a></iframe>
            <iframe title = "l0cked" frameBorder="0" src="https://itch.io/embed/888581?border_width=2&amp;dark=true" width="200" height="169"><a href="https://devhedronyt.itch.io/l0cked">L0CKED by DevHedronYT</a></iframe>

            <h1 className = "section">GitHub Projects</h1>
            <div className = "projects_git">
                {
                    projects.map(project => (
                        <GProj key = {project.full_name} name = {project.name} description = {project.description} stars = {project.stargazers_count} language = {project.language} url = {project.url}/>
                    ))
                }
            </div>
        </div>
    );
}

ReactDOM.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>,
    document.getElementById('root')
);