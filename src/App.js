import React from "react";
import data from "./data/data";
import { Container } from "semantic-ui-react";
import "./styles/App.scss";
import Header from "./components/Header.jsx";
import Education from "./components/Education.jsx";
import Courses from "./components/Courses.jsx";
import Experience from "./components/Experience.jsx";
import Skills from "./components/Skills.jsx";
import Projects from "./components/Projects.jsx";
import Extras from "./components/Extras.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  return (
    <div>
      <Header
        name={data.name}
        title={data.title}
        email={data.email}
        cel={data.cel}
        location={data.location}
        locationURL={data.locationURL}
        github={data.github}
        linkedin={data.linkedin}
        bio={data.bio}
      />
      <Container fluid>
        <Experience experience={data.experience} />
        <Education education={data.education} />
        <Skills skills={data.skills} />
        <Projects projects={data.projects} />
        <Courses courses={data.courses} />
        <Extras extras={data.extras} />
      </Container>
      <Footer
        name={data.name}
        email={data.email}
        cel={data.cel}
        location={data.location}
      />
    </div>
  );
}

export default App;
