import styled from "styled-components";



export const Button = styled.button`
height: auto;
width: 60px;
background: ${props => props.bcgColor};
text-transform: uppercase;
border: 0;
box-shadow: 5px 5px black;
margin: 10px;

&:active {
    box-shadow: none;
    position: relative;
    top: 5px;
    left: 5px;
}
`;