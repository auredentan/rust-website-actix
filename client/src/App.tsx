import React from 'react';
import logo from './logo.svg';
import './App.css';

const App: React.FC = () => {

  const sendData = () => {
    console.log("Sending data !")
    var payload = {
      name: "Test",
      number: 3
    }
    fetch("http://localhost:5000/fibonnaci", {method: "POST", body: JSON.stringify(payload), headers: {"Content-Type": "application/json"}}).then(function (resp) {
      resp.json().then(function (val) {
        console.log(val);
      })
    })
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <button onClick={sendData}>Send data</button>
    </div>
  );
}

export default App;
