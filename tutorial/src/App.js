
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react'

function App() {
  const [mode, setMode] = useState('light');

  const toggleMode = () => {
    if (mode === 'light') {
        setMode('dark');
        document.body.style.background='#112B3C';
      }
      else {
        setMode('light');
        document.body.style.background='white';
    }
    };
  return (
    <>
    <Navbar title="prop titles" mode={mode} toggleMode={toggleMode} aboutText="prop about" />
    
    <div className="container">
    <TextForm heading="need a heading" mode={mode} />
    {/* <About/> */}
    </div>
    </>
  );
}

export default App;

