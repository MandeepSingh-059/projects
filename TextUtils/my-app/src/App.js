import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
// import About from './components/About';
import React, {useState} from 'react';

function App() {
  const [mode, setMode] = useState("light");//wether dark mode is enabled or not
  const [alert, setAlert] = useState(null);

  const toggleMode = () => {
    if(mode === "light"){
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      document.body.style.color = "white";
      showAlert("Dark mode was enabled", "success");
    }
    else{
      setMode("light");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      showAlert("Light mode was enabled", "success");
    }
  }
  
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });

    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  return (
    <>
      <Navbar title="TextUtils" aboutText="About" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      <TextForm heading="Enter Text Below" mode={mode} showAlert={showAlert}/> 
      {/*<About />*/}
    </>
  );
}

export default App;
