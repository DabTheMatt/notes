import styled from "styled-components"

export const PorpsButton = styled.button`
color: white;
font-size: 2rem;
margin: 1rem;
padding: ${(props)=>props.big?"3rem":"1rem"};
`;

export const DangerButton = styled(PorpsButton)`
background: red;
`;

export const SuccessButton = styled(PorpsButton)`
background: green;
`;


// export const BigButton = styled(PorpsButton)`
// margin: 1.5rem;
// text-transform: capitalize;
// color: black;
// font-size: 3rem
// `;


