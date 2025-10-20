import ResumeImage from "../../../public/Resume-TanHongGuan.png"
import "./Resume.css"

export default function Resume() {
    return(
        <div className="resume-content">
            <a href={ResumeImage} download className="download-btn"> Download Resume</a>
            <img class="resume_image" src={ResumeImage} alt="resume"/>
        </div>
    );
}