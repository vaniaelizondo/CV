import React from 'react';
import './styles/App.css';
import { data } from './data/data';
import Header from './components/Header';

function App() {
  const info = data[0]
  return (
    <div>
      <Header 
        name={info.name}
        title={info.title}
        email={info.email}
        cel={info.cel}
        linkedin={info.linkedin}
      />
      Educación
      Experiencia
    </div>
  );
}

export default App;
