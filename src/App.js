import React from "react";
import "./App.css";
import {BasicInput, AwesomeInput} from "./components/Inputs";



function App() {
  return (

    <div>
      <BasicInput/>
      <AwesomeInput />
      <AwesomeInput type="email" placeholder="enter email"/>

    </div>
  );
}

export default App;
