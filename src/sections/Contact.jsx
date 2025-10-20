import LinkedIn from "../assets/icons/github-logo.svg";
import GitHub from "../assets/icons/linked-in.png";
import Email from "../assets/icons/email.jpg";
import Phone from "../assets/icons/phone.png";
import {useState} from 'react';

export default function Contact() {

    const [toastText, setToastText] = useState("Copied!")
    const [visible, setVisible] = useState(false)

    function handleCopy(text) {
        navigator.clipboard.writeText(text);
        setToastText("Copied!");
        setVisible(true);

        setTimeout(() => setVisible(false), 1000);
    }
    return (
        <section id="contact-details">
            {/* LinkedIn -->*/}
            <a className="icon-linkedin"
                href="https://www.linkedin.com/in/tanhongguan04/"
                target="_blank" rel="noopener noreferrer"
                aria-label="LinkedIn">
                <img className="icon" src={LinkedIn} alt="LinkedIn"/>
            </a>

            {/* GitHub */}
            <a className="icon-github"
                href="https://github.com/TanHongGuan"
                target="_blank" rel="noopener noreferrer"
                aria-label="GitHub">
                <img className="icon" src={GitHub} alt="GitHub"/>
            </a>
            
            <div className="contact">
                <img className="icon" src={Phone} alt="phone"/>
                <span
                className="copy"
                onClick={() => handleCopy("+60 17-341 1182")}> 
                +60 17-341 1182 </span>        
            </div>            

            <div className="contact">
                <img className="icon" src={Email} alt="email"/>
                <span
                className="copy" 
                onClick={() => handleCopy("tanhongguan04@gmail.com")}> 
                tanhongguan04@gmail.com </span>
            </div>

            <div 
            className="toast" 
            style={{ opacity: visible ? 1 : 0, transition: "opacity 0.3s ease" }}> {toastText}</div>


        </section>
    );

}