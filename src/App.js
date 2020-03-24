import React from "react";
import { data } from "./data/data";
import { Container } from "semantic-ui-react";
import "./styles/App.css";
import Header from "./components/Header.jsx";
import AboutMe from "./components/AboutMe.jsx";
import Education from "./components/Education.jsx";
import Experience from "./components/Experience.jsx";
import Skills from "./components/Skills.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  const info = data[0];
  return (
    <div>
      <Header
        name={info.name}
        title={info.title}
        email={info.email}
        cel={info.cel}
        location={info.location}
        locationURL={info.locationURL}
        github={info.github}
        linkedin={info.linkedin}
      />
      <Container>
        <AboutMe bio={info.bio}/>
        <Education education={info.education} />
        <Experience experience={info.experience}/>
        <Skills skills={info.skills}/>
      </Container>
      <Footer 
        name={info.name}
        email={info.email}
        cel={info.cel}
        location={info.location}
      />
    </div>
  );
}

export default App;
