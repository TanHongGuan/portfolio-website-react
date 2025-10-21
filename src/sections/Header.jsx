import ProfilePic from "../assets/profile_picture.png"

export default function Header() {
    return (
    <section id="introduction">
        <div className = "name-picture">
            <header className="name" id="intro-header">
                <h2>Hi there!</h2>
                <h2>
                    I am <span className="name-highlight">Tan Hong Guan</span>
                </h2>
                <h2 className="love">
                    And I &lt;love&gt; <span className="coding">CODING</span> <br />
                    <span className="produce">PRODUCING</span> <br />
                    <span className="develop">DEVELOPING  &lt;/love&gt; </span> 
                </h2>
            </header>
            <img className="profile-pic" src={ProfilePic}/>
        </div>
        <hr/>
        <div class="about-me">
            <p>
            I'm currently pursuing a degree in Bachelor of Computer Science in Monash University Malaysia. <br/> 
            This webpage serves as both showcase of my portfolio and my interest in development. <br/>
            <span className="sparkle">✨</span> My career goal is to become a full-fledged full stack developer ;
            <br/>mastering both client-side and server-side technologies to build scalable, efficient, and user-centered applications.
            </p>
        </div>
    </section>            
    );
}
