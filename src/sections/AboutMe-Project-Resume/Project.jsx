import screen1 from "./nutritrack/screen1.png"
import screen2 from "./nutritrack/screen2.png"
import screen3 from "./nutritrack/screen3.png"
import screen4 from "./nutritrack/screen4.png"
import GitHub from "../../assets/icons/github-logo.svg"
import "./Project.css"

export default function Projects() {
    return (
        <div className="Projects">
            <div className="project_card">
                <div className="col1">
                    <p className="Header">Portfolio Website </p>

                    <a className="icon-github"
                        href="https://github.com/TanHongGuan/Portfolio_Website.git"
                        target="_blank" rel="noopener noreferrer"
                        aria-label="GitHub">
                        <img className="icon" src={GitHub} alt="GitHub" />
                    </a>

                    <p className="description"> 
                        A portfolio website project using React, with practice in HTML, CSS and Javascript.
                        Felt like every aspiring developer should have their own portfolio website.
                        <br/>First-time self-directed exposure to React, it was very interesting and fun.
                    </p>
                </div>

                <div className="col2">
                    <div className="knowledge">
                        <p>Learnings</p>
                        <ul className="list-indexing">
                            <li>Grid vs Flexbox</li>
                            <li>Word Highlighting</li>
                            <li>Content Switching</li>
                            <li>Hovering effect</li>
                            <li>Border Radius Effect</li>
                            <li>Link-embedded Icons</li>
                            <li>Image-Text Overlay</li>
                            <li>Image-Image Overlay for Gradient Effect</li>
                            <li>Copy to clipboard function</li>
                            <li>Toast message function</li>
                        </ul>
                    </div>
                    
                    <div className="language">
                        <p>Languages Used</p>
                        <ul className="list-indexing">
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>Javascript</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div class="project_card">
                <div class="col1">
                    <p class="Header">NutriTrack</p>

                    <a class="icon-github"
                        href="https://github.com/TanHongGuan/Nutritrack.git"
                        target="_blank" rel="noopener noreferrer"
                        aria-label="GitHub">
                        <img class="icon" src={GitHub} alt="GitHub" />
                    </a>

                    <p class="description"> 
                        Mobile Application [Android] 
                        <br/>Handle a database of users' login, 
                        record user's nutrition intake, 
                        retrieving fruit nutrition information via FruityVice API,
                        screen navigation and
                        serving input prompts to Gen AI to generate response to user screen
                    </p>
                </div>

                <div class="col2">
                    <div class="knowledge">
                        <p>Learnings</p>
                        <ul class="list-indexing">
                            <li>Screen Navigation</li>
                            <li>Input Validation</li>
                            <li>UI layout formatting</li>
                            <li>Creating a local database</li>
                            <li>Retrieving/Writing to local database</li>
                            <li>GenAI</li>
                            <li>FruityVice API integration</li>
                        </ul>
                    </div>
                    
                    <div class="language">
                        <p>Languages Used</p>
                        <ul class="list-indexing">
                            <li>Kotlin</li>
                        </ul>
                    </div>
                </div>

                <div class="project-showcase">
                    <img src={screen1} />
                    <img src={screen2} />
                    <img src={screen3} />
                    <img src={screen4} />

                </div>
            </div>
        </div>
    );
}