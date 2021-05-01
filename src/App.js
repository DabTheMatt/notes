import React from "react";
import "./App.css";
import {BasicInput, AwesomeInput} from "./components/Inputs";

import Background from "./mattponents/Background";
import { Header } from "./mattponents/Header"



function App() {
  return (

    <div>
      <Background>
        <Header text="Welcome"/>
        <BasicInput/>
        <AwesomeInput />
        <AwesomeInput type="email" placeholder="enter email"/>
      </Background>
    </div>
  );
}

export default App;
