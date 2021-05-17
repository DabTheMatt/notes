import React from "react";
import styled from "styled-components";

export const StyledDiv = styled.div`
background: ${props => props.bcgColor};
height: 200px;

`;

function ColorDiv (props) {
    return (
        <div style={{background:props.bcgColor}}>
            <h1>Div title</h1>
            <h2>Div subtitle</h2>
        </div>
    )
}

export default ColorDiv;