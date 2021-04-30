import React from "react";
import styled from "styled-components";

const StyledHeader = ({ title, className }) => {
  return (
    <section className={className}>
      <h1>{title}</h1>
      <h2 className="random">another header</h2>
    </section>
  );
};

export default styled(StyledHeader)`
  background: grey;
  transition: all 0.5s ease-in-out;
  padding: 1rem;
  h1 {
    color: white;
  }
  .random {
    color: lightgreen;
  }

  &:hover {
    background: black;
  }
`;


