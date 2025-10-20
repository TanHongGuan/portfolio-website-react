import Header from "./sections/header.jsx"
import Contact from "./sections/Contact.jsx"
import AboutMe_Project_Resume from "./sections/AboutMe-Project-Resume/AboutMe-Project.jsx"
import "./sections/AboutMe-Project-Resume/AboutMe-Project.css"
import "./sections/Contact.css"
import "./sections/Header.css"

export default function App() {
  return (
    <div id="HomePage">
      <Header />
      <Contact />
      <AboutMe_Project_Resume />
    </div>
  );
}