import React from "react";

import ColorDiv from "./components/ColorDiv";
import { StyledDiv } from "./components/ColorDiv";
import { Button } from "./components/Button";
import DivWrapper from "./components/DivWrapper";

function App() {
  return (
    <div>
      App
      <ColorDiv bcgColor="red" />
      <ColorDiv bcgColor="green" />
      <StyledDiv bcgColor="violet">
        <Button bcgColor="grey">Click me</Button>
        <Button bcgColor="lightgrey">Click me</Button>
      </StyledDiv>
      <DivWrapper />
    </div>
  );
}

export default App;
