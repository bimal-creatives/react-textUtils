
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react'
import Alert from './components/Alert';

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null)

  const showAlert =(message, type) => {
    setAlert({
      msg:message,
      type:type
    })
  }

  const toggleMode = () => {
    if (mode === 'light') {
        setMode('dark');
        document.body.style.background='#112B3C';
        showAlert("Dark Mode has been enable", "succes")
      }
      else {
        setMode('light');
        document.body.style.background='white';
        showAlert("Light Mode has been enable", "succes")
    }
    };
  return (
    <>
    <Navbar title="prop titles" mode={mode} toggleMode={toggleMode} aboutText="prop about" />
    <Alert alert={alert} />
    <div className="container">
    <TextForm heading="need a heading" mode={mode} />
    {/* <About/> */}
    </div>
    </>
  );
}

export default App;

