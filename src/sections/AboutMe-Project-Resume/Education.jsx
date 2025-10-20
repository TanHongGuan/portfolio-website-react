import MUM from "./schools/MUM.jpg"
import sst from "./schools/sst.jpg"
import sunway from "./schools/sunway.jpg"
import "./Education.css"

export default function Education() {
    return(
        <div className="Education">
            <p> 2024 ~ Present </p>
            <div className="school">
                <img className="overlay-image" src={MUM} alt="Monash University Malaysia"/>
                <div className="gradient-overlay"></div> 
                <div className="overlay-text">
                    <p> Monash University Malaysia </p>
                    <p> Bachelor of Computer Science </p>
                    <p> CGPA : 3.43</p>
                    <br/>
                </div>
            </div>
            <div className="skills">
                <p>Python</p>
                <p>Kotlin</p>
                <p>Java</p>
                <p>SQL</p>
                <p>Linux</p>
                <p>MongoDB</p>
                <p>Git</p>
            </div>

            <p> 2022 ~ 2023 </p>
            <div className="school">
            <img className="overlay-image" src={sunway} alt="Sunway College"/>
            <div className="gradient-overlay"></div>
                <div className="overlay-text">
                    <p> Sunway College , Subang Jaya </p>
                    <p> GCE A-Level </p>
                    <p> Grade : 4 A's</p>
                </div>
            </div>
            <div className="skills">
                <p>Further Mathematics</p>
                <p>Mathematics</p>
                <p>Physics</p>
                <p>Chemistry</p>
            </div>


            <p> 2018 ~ 2021 </p>
            <div className="school">
                <img className="overlay-image" src={sst} alt="Sunway College"/>
                <div className="gradient-overlay"></div>
                <div className="overlay-text">
                    <p> School of Science and Technology , Singapore </p>
                    <p> GCSE O-Level </p>
                </div>
            </div>
            <div className="skills">
                <p>English</p>
                <p>Chinese</p>
                <p>Computing</p>
                <p>Advanced Mathematics</p>
                <p>Mathematics</p>
            </div>
        </div>
    );
}