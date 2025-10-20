import "./AboutMe.css"
import Education from "./Education.jsx"

export default function AboutMe() {
    return(
        <div className="AboutMe">
            <div className="Me">
                <hr/>
                <h1> Who am I?</h1>
                <p>
                    I'm a builder at heart. As a kid it was woodworking; today it's software. <br/>
                    I've chased exposure across different corners of Computer Science in University, even when it meant stretching beyond my comfort zone and at the risk of my grades, but fortunately I'm blessed with strong logical understanding which allowed me to grasp concepts after learning them on the day itself to juggle the workload.  <br/>
                    But no matter where I roam, I find myself always drawn back to developing software with a purpose, where obstacles I meet actually excites me. <br/>
                    Code doesn't work? I find myself typing away, trying over and over again, not until mealtime or bedtime, but until it works. <br/>
                    Code works? I still find myself typing away with the adrenaline rush from seeing every line of code come to life. <br/>
                    I don't love failures, but I embrace them as invaluable lessons that drives me to continuous improvement and a disciplined approach to life.
                </p>
                <hr/>
            </div>
             <Education />
        </div>

       
    );
}