import React, { Component } from "react";
import styled from "styled-components";

class Frame2 extends Component {
  state = {
    colors: ["white", "yellow", "blue", "red"],
    color: "",
    size1: 0,
    size2: 0,
    size3: 0,
    left1: 0,
    left2: 0,
    left3: 0,
    on: false
  };
  randomize = () => {
    let randomNum1 = parseInt(Math.floor(Math.random() * (98 - 100)) + 100);
    this.setState({
      size1: randomNum1,
    });
    let left1 = 100 - randomNum1;
    let randomNum2 = parseInt(Math.floor(Math.random() * (98 - 100)) + 100);
    let left2 = 100 - randomNum2;

    let randomNum3 = parseInt(Math.floor(Math.random() * (left1 - 5)) + 5);
    let left3 = left1 - randomNum3;
    console.log(randomNum1, left1, randomNum2);

    this.setState({
      size1: randomNum1,
    });
  };

  letColor = () => {
    let randomCol = parseInt(Math.random() * 4);
    randomCol = this.state.colors[randomCol];

    return randomCol;
  };

  handleClick = () => {
    console.log("haha");
    let randomNum1 = parseInt(Math.floor(Math.random() * (600 - 20)) + 20);

    let left1 = 600 - randomNum1;
    let randomNum2 = parseInt(Math.floor(Math.random() * (600 - 20)) + 20);
    let left2 = 600 - randomNum2;

    let randomNum3 = parseInt(Math.floor(Math.random() * (left1 - 5)) + 5);
    let left3 = left1 - randomNum3;
    console.log(randomNum1, randomNum2, randomNum3, left1, left2, left3);

    this.setState({
      size1: randomNum1,
      size2: randomNum2,
      size3: randomNum3,
      left1: left1,
      left2: left2,
      left3: left3,
      on: true
    });
  };

  render() {
    return (
      <div>
          
        <div className="sizeDiv">
          <FrameWrapper onClick={this.handleClick}>
            {this.state.on ? <div className="row">
              <div className="gridWrapper">
                <div
                  className={this.letColor()} 
                  style={{ width: `${this.state.size1}px`, height: "600px" }}
                >
                    
                    
                </div>
              </div>
              <div className="column">
                <div
                  className={this.letColor()}
                  style={{
                    width: `${this.state.left1}px`,
                    height: `${this.state.size2}px`,
                  }}
                ></div>
                <div className="row">
                <div
                  className={this.letColor()}
                  style={{
                    width: `${this.state.size3}px`,
                    height: `${this.state.left2}px`,
                  }}
                ></div>
                    
                    <div
                  className={this.letColor()}
                  style={{
                    width: `${this.state.left3}px`,
                    height: `100%`
                  }}
                >
                    </div>

            
                </div>
              </div>
            </div> : <div></div>}
            
          </FrameWrapper>
        </div>
      </div>
    );
  }
}

export const FrameWrapper = styled.div`
  height: 100%;
  width: 100%;
  background: #eaeaea;
  
  box-shadow: 8px 8px 40px rgba(0, 0, 0, 0.5);
  color: white;
  
`;

export const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(9, 1fr);
  grid-template-rows: repeat(9, 1fr);
  justify-items: stretch;
  align-items: stretch;
`;

export const RedDiv = styled.div`
  background: rgb(199, 78, 54);
  grid-column: 1 / 9;
  grid-row: 2 / 9;
  border: 3px solid rgb(10, 11, 5);
`;
export const WhiteDiv = styled.div`
  background: rgb(209, 212, 209);
  height: 20px;
  width: 20px;
  border: 3px solid rgb(10, 11, 5);
`;

export default Frame2;
