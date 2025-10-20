import {useState} from 'react';
import AboutMe from "./AboutMe.jsx"
import Projects from "./Project.jsx"
import Resume from "./Resume.jsx"
export default function AboutMe_Project() {

    const [tab, setTab] = useState("aboutme")

    return (
        <div className="switcher">
            <div className="tab-buttons">
                <button 
                className={`tab ${tab==="aboutme" ? "active" : ""}`}
                onClick= {() => setTab("aboutme")}
                >About Me</button>

                <button 
                className={`tab ${tab==="projects" ? "active" : ""}`}
                onClick = {() => setTab("projects")}
                >Projects</button>

                <button 
                className={`tab ${tab==="resume" ? "active" : ""}`} 
                onClick={() => setTab("resume")}
                >Resume</button>
            </div>

            <div className="tab-content">
                {tab === "aboutme" && <p> <AboutMe /> </p>}
                {tab === "projects" && <p> <Projects/> </p>}
                {tab === "resume" && <p> <Resume/> </p>}
            </div>


        </div>
    );
}