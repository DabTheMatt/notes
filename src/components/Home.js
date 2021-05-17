import React, { Component } from 'react';
import Child from "./Child";

class Home extends Component {
    state = {
        ChildButtonClicks: 0,
        GrandButtonClicks: 0
    }

    handleClick = () => {
        console.log("Home clicks", this.state.ChildButtonClicks);
        this.setState({
            ChildButtonClicks: this.state.ChildButtonClicks + 1
        })
        console.log("Home clicks 2", this.state.ChildButtonClicks);
    }

   

    render() {
        return (
            <div style={{background:"grey", padding:"1rem"}}>
                Home
                <div>Child button click: {this.state.ChildButtonClicks}</div>
                <div>Grandchild button click: {this.state.GrandButtonClicks}</div>
                <Child color="red" btnCount={this.handleClick} btnClicks={this.state.ChildButtonClicks}/>
                
            </div>

        );
    }
}

export default Home;