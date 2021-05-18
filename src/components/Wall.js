
import React, { Component } from 'react';
import styled from "styled-components";
import Frame from "./Frame";

class Wall extends Component {
    render() {
        return (
            <WallWrapper>
                <Frame />
            </WallWrapper>
        );
    }
}

export const WallWrapper = styled.div`
height: 100vh;
background: #fbfefb;
display: flex;
align-items: center;
justify-content: center;
`;

export default Wall;