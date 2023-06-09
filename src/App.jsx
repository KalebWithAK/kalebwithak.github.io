import "./App.css"
//import phone from "."
//import mail from "."
//import location from ""
//import Kaleb from ""

import Experience from "./components/experience";
import Project from "./components/project"
import { technical_skills, soft_skills, projects, jobs } from "./data"

function App() {

  return (
    <div className="App">
      <header>
        <h1>Kaleb Dean</h1>
        <a href="https://kalebwithak.github.io/resume">Resume</a>
        <a href="#contact">Contact</a>
      </header>

      <main>
        <section className="intro">
          {/*<p>Hello, I am a Junior Computer Science student at the University of North Carolina at Charlotte. I am 
          seeking an internship in web and mobile application development for the summer of 2023.</p> 
          <p>Besides coding, I enjoy singing, dancing, playing basketball, reading, martial arts, going to 
          the gym, riding my electric skateboard, and watching movies.</p>*/}
          <img src={'/images/Kaleb.jpg'} alt="Kaleb Dean" />

          <p>
            Hello, I am Kaleb Dean a Computer Science major at UNC Charlotte 
            concentrating in Web and Mobile Application Development. Working with you will 
            allow me to put my technical skills to the test, learn from more seasoned 
            developers, and understand the inner workings of business. 
          </p>
          <p>
            I am not only a technical asset, I also have strong communication, 
            leadership, and mentorship skills. In class and in the mixed martial arts club at 
            UNC Charlotte, I try to help the person next to me understand the material. I 
            have a teamwork mindset where I want to see those around me grow just as much as 
            myself. 
          </p>
        </section>

        <section className="skills">
        <div className="soft-skills">
            <h2>Soft Skills</h2>
            <ul>
              {soft_skills.map(skill => <li key={"soft_skill" + soft_skills.indexOf(skill)}>{skill}</li>)}
            </ul>
          </div>

          <div className="technical-skills">
            <h2>Technical Skills</h2>
            <ul>
              {technical_skills.map(skill => <li key={"technical_skill" + technical_skills.indexOf(skill)}>
                {skill.name} 
                <span className="datetime" style={{ bottom: 0 }}>{skill.time}</span>
              </li>)}
            </ul>
          </div>
        </section>

        <section className="projects">
          <h2 className="projects">Projects</h2> 

          <div className="card-container"> 
          {projects.map(project => {
            const { title, img, date, purpose, utilized, url, github } = project
            
            return <Project key={"project" + projects.indexOf(project)} 
                title={title} 
                img={img} 
                date={date} 
                purpose={purpose} 
                utilized={utilized}
                url={url}
                github={github}
            />
          })}
          </div>
        </section>

        <section className="education-experience-container">
        <div className="experience">
            <h2>Experience</h2>

            <div className="jobs">
            {jobs.map(job => {
              const { position, company, img, date, contribution } = job

              return <Experience key={"job"+jobs.indexOf(job)}
                position={position}
                company={company} 
                img={img}
                date={date}
                contribution={contribution}
              />
            })}
            </div>
          </div>

          <div className="education">
            <h2>Education</h2>
            <h3>Pursuing Bachelor's in Computer Science</h3>
            <p>Concentrating in Web and Mobile Application Development</p>
            <p>Anticipated Graduation: <span className="datetime" style={{ bottom: 0 }}>May 2024</span></p>

              <p>University of North Carolina at Charlotte</p>
              <span className="datetime">Fall 2020 - Present</span>
              <p>High Point University</p>
              <span className="datetime">Fall 2019 - Spring 2020</span>
          </div>
        </section>

        <section className="contact">
          <h2 id="contact">Looking for a developer? <br></br>Get in touch!</h2>
          {/* <img src={require("./images/profile.jpg")} */}
          
          <nav className="contact">
            <a href="mailto:kdean15@uncc.edu"><img src={'/images/mail.png'} /> kad9603@gmail.com</a>
            <a href="tel:9802987018"><img src={'/images/phone.png'} /> 980-298-7018</a>
            <a href="https://goo.gl/maps/TnDGyHT9D2VUAUtv7"><img src={'/images/location.png'} /> Charlotte, NC</a>
          </nav>
        </section>
      </main>

      <footer>
        <p>Built with <a href="https://reactjs.org">React</a></p>
        {/*<ul style={{ gridColumn: "1 / 3", gridRow: 2}}>
          <li><a target="_blank" href="https://icons8.com/icon/85059/phone">Phone</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a></li>
          <li><a target="_blank" href="https://icons8.com/icon/85467/mail">Mail</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a></li>
          <li><a target="_blank" href="https://icons8.com/icon/88172/map-pin">Map Pin</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a></li>
          </ul>*/}
      </footer>
    </div>
  );
}

export default App
