import React from 'react';
import './styles/App.css';
import { data } from './data/data';
import Header from './components/Header.jsx';
import Education from './components/Education.jsx';
import { Container } from "semantic-ui-react";

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
        <Education
        data={info.education}
      />
      </Container>
      
    </div>
  );
}

export default App;
