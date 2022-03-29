import React, {useState} from 'react';
import GProj from './GithubProject';

async function get_json_obj_from_link(url, mode) {
    try { 
        const response = await fetch(url);
        const data = await response.json();
        return data;
    } catch(e) {
        console.log(e);

        // for git
        var projects = [{
            "full_name" : "none_two",
            "name" : "data missing",
            "description" : "failed to get data from request",
            "stargazers_count" : "-1",
            "language" : "failed to get data",
            "url" : "no data",
            "games" : [{
                "name" : "none",
                "views_count" : "-1"
            }]
        }];

        return projects;
    }
}


const all_repos = get_json_obj_from_link("https://api.github.com/users/DevHedronYT/repos", "cors");
// const all_itch_proj = get_json_obj_from_link("https://cors-hedron.herokuapp.com/https://itch.io/api/1/APn3S7HjLH65hibiaYWZXGCULbOZeG7mrGfsWfFy/my-games", "cors");

function Home() {
    const [gitProjects, setGitProjects] = useState([]);
    // const [itchProjects, setItchProjects] = useState([]);

    all_repos.then((value) => {
        setGitProjects(value);
    })

    /*
    console.log(all_itch_proj);
    all_itch_proj.then((value) => {
        try {
            setItchProjects(value[0].games);
        } catch (e) {
            setItchProjects(value.games);
        }
    }); */

    if (gitProjects.length > 2) {
        var i, j, tmp_var;
        for (i = 0; i < gitProjects.length - 1; i++) {
            for (j = 0; j < gitProjects.length - i - 1; j++) {
                if (gitProjects[j + 1].stargazers_count > gitProjects[j].stargazers_count) {
                    tmp_var = gitProjects[j];
                    gitProjects[j] = gitProjects[j + 1];
                    gitProjects[j + 1] = tmp_var;
                }
            }
        }
        // get top 3 gitProjects
        while (gitProjects.length > 3) {
            gitProjects.pop();
        }
    }
    /*
    if (itchProjects.length > 2) {
        var i, j, tmp_var;
        for (i = 0; i < itchProjects.length - 1; i++) {
            for (j = 0; j < itchProjects.length - i - 1; j++) {
                if (itchProjects[j + 1].views_count > itchProjects[j].views_count) {
                    tmp_var = itchProjects[j];
                    itchProjects[j] = itchProjects[j + 1];
                    itchProjects[j + 1] = tmp_var;
                }
            }
        }
        // get top 3 gitProjects
        while (itchProjects.length > 3) {
            itchProjects.pop();
        }
    } */

    return (
        <div className = "App"> 
            <img alt = "icon" src = "res/hedron.jpg"></img>

            <h1 className = "section">DevHedron</h1>
            <h3 id = "captions">Student & Hobbyist Game Dev</h3>

            <div className="about">
                <p> 
                    Hi! I'm DevHedron, I am a hobbyist programmer who has been 
                    programming for 3 years now. I am experienced mainly in C
                    and Python but I can do a bit of web development as well
                    with Javascript, HTML and CSS. 
                </p>
            </div>


            <h1 className = "section">GitHub Projects</h1>
            <div className = "projects_git">
                {
                    gitProjects.map(project => (
                        <GProj key = {project.full_name} name = {project.name} description = {project.description} stars = {project.stargazers_count} language = {project.language} url = {project.html_url}/>
                    ))
                }
            </div>
            <h1 className = "section"><a className = "itch" href = "https://devhedronyt.itch.io">itch.io Projects</a></h1>
        </div>
    );
}

export default Home;
/*

            {
                itchProjects.map(game => (
                    <h1>{game.title}</h1>
                ))
            }
            <iframe title = "astober" frameBorder="0" src="https://itch.io/embed/1237119?border_width=2&amp;dark=true" width="200" height="169"><a href="https://devhedronyt.itch.io/astober">Astober by DevHedronYT</a></iframe>
            <iframe title = "protect-the-square" frameBorder="0" src="https://itch.io/embed/1169209?border_width=2&amp;dark=true" width="200" height="169"><a href="https://devhedronyt.itch.io/protect-the-square">Protect The Square by DevHedronYT</a></iframe>
            <iframe title = "click-and-destroy" frameBorder="0" src="https://itch.io/embed/929491?border_width=2&amp;dark=true" width="200" height="169"><a href="https://devhedronyt.itch.io/clickdestroy">Click &amp; Destroy by DevHedronYT</a></iframe>
            <iframe title = "l0cked" frameBorder="0" src="https://itch.io/embed/888581?border_width=2&amp;dark=true" width="200" height="169"><a href="https://devhedronyt.itch.io/l0cked">L0CKED by DevHedronYT</a></iframe>


*/


