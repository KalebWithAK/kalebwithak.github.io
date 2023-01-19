import "./App.css"

import Experience from "./components/experience";
import Project from "./components/project"
import { technical_skills, soft_skills, projects, jobs } from "./data"

function App() {
  

  return (
    <div className="App">
      <header>
        <h1>Kaleb Dean</h1>
        <a href="https://kalebwithak.github.io/resume">resume</a>
        <a href="#contact">contact</a>
      </header>

      <main>
        <section className="intro">
          <p>Hello, I am a Junior Computer Science student at the University of North Carolina at Charlotte. I am 
          seeking internships in web and mobile application development for the summer of 2023.</p> 
          <p>Besides coding, I enjoy singing, dancing, playing basketball, reading, martial arts, going to 
          the gym, riding my electic skateboard, and watching movies.</p>
        </section>

        <section className="skills">
          <div className="technical-skills">
            <h2>Technical Skills</h2>
            <ul>
              {technical_skills.map(skill => <li key={"technical_skill" + technical_skills.indexOf(skill)}>
                {skill.name} 
                <span className="datetime">{skill.time}</span>
              </li>)}
            </ul>
          </div>

          <div className="soft-skills">
            <h2>Soft Skills</h2>
            <ul>
              {soft_skills.map(skill => <li key={"soft_skill" + soft_skills.indexOf(skill)}>{skill}</li>)}
            </ul>
          </div>
        </section>

        <section className="projects">
          <h2 className="projects">Here are some projects</h2> 

          <div className="card-container"> 
          {projects.map(project => {
            const { title, img, date, purpose, utilized, url } = project
            
            return <Project key={"project" + projects.indexOf(project)} 
                title={title} 
                img={img} 
                date={date} 
                purpose={purpose} 
                utilized={utilized}
                url={url}
            />
          })}
          </div>
        </section>

        <section className="education-experience-container">
          <div className="education">
            <h2>Education</h2>
            <h3>Pursuing Bachelor's in Computer Science</h3>
            <p>Concentrating in Web and Mobile Application Development</p>
            <p>Anticiated Graduation: <span className="datetime" style={{ bottom: 0 }}>May 2024</span></p>

              <p>University of North Carolina at Charlotte</p>
              <span className="datetime">Fall 2020 - Present</span>
              <p>High Point University</p>
              <span className="datetime">Fall 2019 - Spring 2020</span>
          </div>

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
        </section>

        <section className="contact">
          <h2 id="contact">Looking for an intern? Get in touch!</h2>
          {/* <img src={require("./images/profile.jpg")} */}
          
          <ul>
            <li>
              {/* <img src={require("./images/email.png")} */}
              <a href="mailto:kad9603@gmail.com">kad9603@gmail.com</a>
            </li>
            <li>
              {/* <img src={require("./images/phone.png")} */}
              <a href="tel:9802987018">980-298-7018</a>
            </li>
            <li>
              {/* <img src={require("./images/location.png")} */}
              <a href="https://goo.gl/maps/TnDGyHT9D2VUAUtv7">Charlotte, NC</a>
            </li>
          </ul>
        </section>
      </main>

      <footer>
        <p>Built with <a href="https://reactjs.org">React</a></p>
        <p>This website does not use cookies 🍪</p>
      </footer>
    </div>
  );
}

export default App;
