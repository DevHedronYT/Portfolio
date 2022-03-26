import React, { useState } from 'react';
import ReactDOM from 'react-dom';
//import github_projects from './components/projects';
import './index.css';

const GProj = ({name, description, stars, language, url}) => {
    console.log(name);
    return (
        <div className = "github-proj">
            <h1>{name}</h1>
            <p>{description}</p>
            <h1>Stars: {stars}</h1>
            <h1>Written mainly in {language}</h1>
            <a href={url}>Link</a>
        </div>
    );
}

const get_github_projects = async() => {
    try { 
        const response = await fetch("https://api.github.com/users/DevHedronYT/repos");
        const data = await response.json();
        return data;
    } catch(e) {
        console.log(e);
    }
}

const all_repos = get_github_projects();

function App() {
    const [projects, setProjects] = useState([]);

    all_repos.then((value) => {
        setProjects(value);
    })

    for (var i = 0; i < projects.length; i++) {
        if (projects[i].stargazers_count < 10) {
            var tmp = projects[projects.length - 1];
            projects[projects.length - 1] = projects[i];
            projects[i] = tmp
            projects.pop();
        }
    }
    for (var i = 0; i < projects.length; i++) {
        if (projects[i].stargazers_count < 10) {
            var tmp = projects[projects.length - 1];
            projects[projects.length - 1] = projects[i];
            projects[i] = tmp
            projects.pop();
        }
    }



//    setProjects(repos);
//    console.log(projects);


    return (
        <div className = "App"> 
            <img alt = "icon" src = "res/hedron.jpg"></img>
            <div className = "header">
                <h1 id = "title">DevHedron</h1>
                <p>Student & Hobbyist Dev</p>
            </div>
            <div className="about">
                <p className="text"> 
                    Hi! I'm DevHedron, I am a hobbyist programmer who has been 
                    programming for 3 years now. I am experienced mainly in C
                    and Python but I can do a bit of web development as well
                    with Javascript, HTML and CSS. 
                </p>
            </div>

            <h1>itch.io Projects</h1>
            <iframe title = "astober" frameBorder="0" src="https://itch.io/embed/1237119?border_width=2&amp;dark=true" width="200" height="169"><a href="https://devhedronyt.itch.io/astober">Astober by DevHedronYT</a></iframe>
            <iframe title = "protect-the-square" frameBorder="0" src="https://itch.io/embed/1169209?border_width=2&amp;dark=true" width="200" height="169"><a href="https://devhedronyt.itch.io/protect-the-square">Protect The Square by DevHedronYT</a></iframe>
            <iframe title = "click-and-destroy" frameBorder="0" src="https://itch.io/embed/929491?border_width=2&amp;dark=true" width="200" height="169"><a href="https://devhedronyt.itch.io/clickdestroy">Click &amp; Destroy by DevHedronYT</a></iframe>
            <iframe title = "L0CKED" frameBorder="0" src="https://itch.io/embed/888581?border_width=2&amp;dark=true" width="200" height="169"><a href="https://devhedronyt.itch.io/l0cked">L0CKED by DevHedronYT</a></iframe>

            <h1>GitHub Projects</h1>
            <div className = "projects_git">
                {
                    projects.map(project => (
                        <GProj name = {project.name} description = {project.description} stars = {project.stargazers_count} language = {project.language} url = {project.url}/>
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




/*import React, { useState, Component } from 'react';
import ReactDOM from 'react-dom';
//import github_projects from './components/projects';
import './index.css';

const get_github_projects = async() => {
    const response = await fetch("https://api.github.com/users/DevHedronYT/repos");
    const data = await response.json();
    return data;
}

const GProj = ({name, description, stars, language, url}) => {
    console.log(name);
    return (
        <div className = "github-proj">
            <h1>{name}</h1>
            <p>{description}</p>
            <h1>{stars}</h1>
            <h1>{language}</h1>
            <a href={url}>Link</a>
        </div>
    );
}

const all_repos = get_github_projects();
function App() {
    const [projects, setProjects] = useState([]);

    all_repos.then((value) => {
        setProjects(value);

    })


    return (
        <div className = "App"> 
            <img alt = "icon" src = "res/hedron.jpg"></img>
            <div className = "header">
                <h1 id = "title">DevHedron</h1>
                <p>Student & Hobbyist Dev</p>
            </div>
            <div className="about">
                <p className="text"> 
                    Hi! I'm DevHedron, I am a hobbyist programmer who has been 
                    programming for 3 years now. I am experienced mainly in C
                    and Python but I can do a bit of web development as well
                    with Javascript, HTML and CSS. 
                </p>
            </div>

            <h1>itch.io Projects</h1>
            <iframe title = "astober" frameborder="0" src="https://itch.io/embed/1237119?border_width=2&amp;dark=true" width="200" height="169"><a href="https://devhedronyt.itch.io/astober">Astober by DevHedronYT</a></iframe>
            <iframe title = "protect-the-square" frameborder="0" src="https://itch.io/embed/1169209?border_width=2&amp;dark=true" width="200" height="169"><a href="https://devhedronyt.itch.io/protect-the-square">Protect The Square by DevHedronYT</a></iframe>
            <iframe title = "click-and-destroy" frameborder="0" src="https://itch.io/embed/929491?border_width=2&amp;dark=true" width="200" height="169"><a href="https://devhedronyt.itch.io/clickdestroy">Click &amp; Destroy by DevHedronYT</a></iframe>
            <iframe title = "L0CKED" frameborder="0" src="https://itch.io/embed/888581?border_width=2&amp;dark=true" width="200" height="169"><a href="https://devhedronyt.itch.io/l0cked">L0CKED by DevHedronYT</a></iframe>

            <h1>GitHub Projects</h1>
            <GProj props={projects[0].name, projects[0].description, projects[0].stargazers_count, projects[0].language, projects[0].url}/>
        </div>
    );

}

ReactDOM.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>,
    document.getElementById('root')
);

*/