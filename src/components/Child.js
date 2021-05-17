import React, { Component } from "react";
import Grandchild from "./Grandchild";

class Child extends Component {
    state = {
        btnClick: 0
    }

    handleClick = () => {
        this.setState({
            btnClick: this.state.btnClick + 1
        })
        this.props.btnCount(this.state.btnClick + 1);
        console.log("child btnClick", this.state.btnClick);
    }

  render() {
    return (
        <div style={{background:"lightgrey", padding:"1rem"}}>
        <p style={{ color: this.props.color }}>Child</p>
        <button onClick={()=>this.props.btnCount()}>Child button (sending as cbFunction to Home)</button>
        <p>Clicked: {this.props.btnClicks} times (recived from Home)</p>
        <Grandchild colorFromChild="green" colorFromHome={this.props.color} />
      </div>
    );
  }
}

export default Child;
