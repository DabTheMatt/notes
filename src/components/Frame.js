import React, { Component } from 'react';
import styled from "styled-components";

class Frame extends Component {
    state = {
        colors: ["white", "yellow", "blue", "red"],
        color: ""
    }
    letRandom = () => {
       let randomNum = parseInt(Math.random()*30+5);
       return (
           randomNum
       )
    }

    letColor = () => {
        let randomCol = parseInt(Math.random()*4);
        randomCol = this.state.colors[randomCol];
        
        return (
            randomCol
            )
    }

    render() {
        

        
        return (
            <FrameWrapper>
                <div className="gridWrapper">
                    <div className={this.letColor()} style={{height:`${this.letRandom()}vh`, width:`${this.letRandom()}vw`}}></div>
                    <div className={this.letColor()} style={{height:`${this.letRandom()}vh`, width:`${this.letRandom()}vw`}}></div>
                    <div className={this.letColor()} style={{height:`${this.letRandom()}vh`, width:`${this.letRandom()}vw`}}></div>
                    <div className={this.letColor()} style={{height:`${this.letRandom()}vh`, width:`${this.letRandom()}vw`}}></div>
                    <div className={this.letColor()} style={{height:`${this.letRandom()}vh`, width:`${this.letRandom()}vw`}}></div>
                    <div className={this.letColor()} style={{height:`${this.letRandom()}vh`, width:`${this.letRandom()}vw`}}></div>
                </div>
            </FrameWrapper>
        );
    }
}

export const FrameWrapper = styled.div`
height: auto;
width: auto;
background: #eaeaea;
border-top: 1px solid white;
border-left: 1px solid white;
border-right: 1px solid #ced4da;
border-bottom: 1px solid #ced4da;
box-shadow: 8px 8px 40px rgba(0,0,0,0.5);
color: white;
padding: 2px;
`;

export const GridWrapper = styled.div`
    display: grid;
grid-template-columns: repeat(9, 1fr);
grid-template-rows: repeat(9, 1fr);
justify-items: stretch;
align-items: stretch;

`;

export const RedDiv = styled.div`
background: rgb(199,78,54);
grid-column: 1 / 9;
grid-row: 2 / 9;
border: 3px solid rgb(10,11,5);
`;
export const WhiteDiv = styled.div`
background: rgb(209,212,209);
height: 20px;
width: 20px;
border: 3px solid rgb(10,11,5);
`;

export default Frame;