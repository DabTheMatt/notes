import styled from "styled-components";

const color = "black";
const padding = "padding:1rem";
const margin = "margin:1rem";
const border = (width="20px")=> {
    return`border:solid ${width} red`
};

export const Button = styled.button`
${padding};
${margin};
  color: var(--textColor);
  background: blue;
  text-transform: uppercase;
    ${border("10px")}
`;

export const SecondButton = styled.button`
  color: ${color};
  background: var(--primaryColor);
  text-transform: uppercase;
  ${padding};
${margin};
${border()}
`;