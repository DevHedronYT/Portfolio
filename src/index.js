import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function App() {
    return (
        <div className = "App"> 
            <img src = "res/hedron.jpg"></img>
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
            <iframe frameborder="0" src="https://itch.io/embed/1237119?border_width=2&amp;dark=true" width="200" height="169"><a href="https://devhedronyt.itch.io/astober">Astober by DevHedronYT</a></iframe>
            <iframe frameborder="0" src="https://itch.io/embed/1169209?border_width=2&amp;dark=true" width="200" height="169"><a href="https://devhedronyt.itch.io/protect-the-square">Protect The Square by DevHedronYT</a></iframe>
            <iframe frameborder="0" src="https://itch.io/embed/929491?border_width=2&amp;dark=true" width="200" height="169"><a href="https://devhedronyt.itch.io/clickdestroy">Click &amp; Destroy by DevHedronYT</a></iframe>
            <iframe frameborder="0" src="https://itch.io/embed/888581?border_width=2&amp;dark=true" width="200" height="169"><a href="https://devhedronyt.itch.io/l0cked">L0CKED by DevHedronYT</a></iframe>


            <ul class="socials">
                    <li>
                        <div class="button">
                            <div class="twitter">
                                <div class="icon">
                                    <i class="fab fa-twitter"></i>
                                </div>
                                <span><a href="https://twitter.com/DevHedronYT">Twitter</a></span>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div class="button">
                            <div class="youtube">
                                <div class="icon">
                                    <i class="fab fa-youtube"></i>
                                </div>
                                <span><a href="https://www.youtube.com/c/DevHedron">YouTube</a></span>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div class="button">
                            <div class="github">
                                <div class="icon">
                                    <i class="fab fa-github"></i>
                                </div>
                                <span><a href="https://github.com/DevHedronYT">GitHub</a></span>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div class="button">
                            <div class="github">
                                <div class="icon">
                                    <i class="fab fa-discord"></i>
                                </div>
                                <span><a href="https://discord.gg/p8RbUG3wnQ">Discord</a></span>
                            </div>
                        </div>
                    </li>
                </ul>

        </div>
    );
}

ReactDOM.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>,
    document.getElementById('root')
);

