import styled from "styled-components";

const Button = styled.button`
${(props)=>`bacground:${props.theme.secendaryColor}`};
${(props)=>`color:${props.theme.primaryColor}`};
text-transform: capitalize;
border: 2px solid black;
cursor: pointer;
`;

export default Button;