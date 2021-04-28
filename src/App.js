import React from "react";
import "./App.css";
import styled from "styled-components";

const Button = styled.button`
  color: white;
  background: blue;
  text-transform: uppercase;
`;

const SecondButton = styled.button`
  color: white;
  background: red;
  text-transform: uppercase;
`;

function App() {
  return (
    <div>
      Hello from App
      <Button>click me</Button>
      <SecondButton>dont click me</SecondButton>
    </div>
  );
}

export default App;
