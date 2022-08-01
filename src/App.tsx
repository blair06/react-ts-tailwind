import React from "react";
import logo from "./logo.svg";
import "./App.css";
import tw from "tailwind-styled-components";

const H1 = tw.h1`
  text-3xl 
  font-bold
  underline 
  text-sky-400
`;
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <H1>Hello world!</H1>
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
    </div>
  );
}

export default App;
