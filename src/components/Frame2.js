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
    on: false,
    color1: 0,
    color2: 0,
    color3: 0,
    color4: 0,
  };

  letColor = () => {
    let randomCol1 = parseInt(Math.random() * this.state.colors.length);
    let col1 = this.state.colors[randomCol1];
    let randomCol2 = parseInt(Math.random() * this.state.colors.length);
    let col2 = this.state.colors[randomCol2];
    let randomCol3 = parseInt(Math.random() * this.state.colors.length);
    let col3 = this.state.colors[randomCol3];
    let randomCol4 = parseInt(Math.random() * this.state.colors.length);
    let col4 = this.state.colors[randomCol4];
    this.setState({
      color1: col1,
      color2: col2,
      color3: col3,
      color4: col4,
    });
    console.log("col1", col1);
    return randomCol1;
  };

  handleClick = () => {
    this.letColor();
    console.log("haha");
    console.log("col1", this.state.color1);
    let randomNum1 = parseInt(Math.floor(Math.random() * (400 - 50)) + 50);

    let left1 = 500 - randomNum1;
    let randomNum2 = parseInt(Math.floor(Math.random() * (400 - 50)) + 50);
    let left2 = 500 - randomNum2;

    let randomNum3 = parseInt(
      Math.floor(Math.random() * (left1 - 10 - 20)) + 20
    );
    let left3 = left1 - randomNum3;
    console.log(randomNum1, randomNum2, randomNum3, left1, left2, left3);

    this.setState({
      size1: randomNum1,
      size2: randomNum2,
      size3: randomNum3,
      left1: left1,
      left2: left2,
      left3: left3,
      on: true,
    });
  };

  handleChangeColor1 = (id) => {
    if (this.state.color1 === "red") {
      this.setState({
        color1: "blue",
      });
    } else if (this.state.color1 === "blue") {
      this.setState({
        color1: "yellow",
      });
    } else if (this.state.color1 === "yellow") {
      this.setState({
        color1: "white",
      });
    } else if (this.state.color1 === "white") {
      this.setState({
        color1: "red",
      });
    }
  };

  handleChangeColor2 = (id) => {
    if (this.state.color2 === "red") {
      this.setState({
        color2: "blue",
      });
    } else if (this.state.color2 === "blue") {
      this.setState({
        color2: "yellow",
      });
    } else if (this.state.color2 === "yellow") {
      this.setState({
        color2: "white",
      });
    } else if (this.state.color2 === "white") {
      this.setState({
        color2: "red",
      });
    }
  };

  handleChangeColor4 = (id) => {
    if (this.state.color4 === "red") {
      this.setState({
        color4: "blue",
      });
    } else if (this.state.color4 === "blue") {
      this.setState({
        color4: "yellow",
      });
    } else if (this.state.color4 === "yellow") {
      this.setState({
        color4: "white",
      });
    } else if (this.state.color4 === "white") {
      this.setState({
        color4: "red",
      });
    }
  };

  handleChangeColor3 = (id) => {
    if (this.state.color3 === "red") {
      this.setState({
        color3: "blue",
      });
    } else if (this.state.color3 === "blue") {
      this.setState({
        color3: "yellow",
      });
    } else if (this.state.color3 === "yellow") {
      this.setState({
        color3: "white",
      });
    } else if (this.state.color3 === "white") {
      this.setState({
        color3: "red",
      });
    }
  };

  

  render() {
    return (
      <div className="flex">
        <button style={{marginLeft:"45%"}} onClick={this.handleClick}>Paint</button>
        <div className="sizeDiv">
          <FrameWrapper>
          
            {this.state.on ? (
              <div className="row">
                <div className="gridWrapper">
                  <div
                    id="1"
                    onClick={(id) => this.handleChangeColor1(id)}
                    className={this.state.color1}
                    style={{ width: `${this.state.size1}px`, height: "500px" }}
                  ></div>
                </div>
                <div className="column">
                  <div
                    onClick={(id) => this.handleChangeColor2(id)}
                    className={this.state.color2}
                    style={{
                      width: `${this.state.left1}px`,
                      height: `${this.state.size2}px`,
                    }}
                  ></div>
                  <div className="row">
                    <div
                      onClick={(id) => this.handleChangeColor3(id)}
                      className={this.state.color3}
                      style={{
                        width: `${this.state.size3}px`,
                        height: `${this.state.left2}px`,
                      }}
                    ></div>

                    <div
                      onClick={(id) => this.handleChangeColor4(id)}
                      className={this.state.color4}
                      style={{
                        width: `${this.state.left3}px`,
                        height: `100%`,
                      }}
                    ></div>
                  </div>
                </div>
              </div>
            ) : (
              <div></div>
            )}
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
