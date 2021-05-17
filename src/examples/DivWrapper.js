import React from "react";
import { Button } from "./Button";

import Div from "./Div";

class DivWrapper extends React.Component {
    state = {
        divs: [],
        startId: 0
    }

    addDiv = () => {
        const div = {
            name: "Tom",
            age: 21,
            id: this.state.startId
        }
        let tempDivs = this.state.divs;
        this.setState({
            divs: [...tempDivs, div],
            startId: this.state.startId+1
        })
        console.log(this.state.divs);
    }

    delDiv = (id) => {
        console.log(id)
        let tempDivs = this.state.divs;
        tempDivs = tempDivs.filter(el => el.id != id);
        this.setState({
            divs: tempDivs
        })
        }
        

    

    render (){
        
        
        return(
            <div>
            <Button bcgColor="blue" onClick={this.addDiv}>Add me</Button>
            {this.state.divs.map(div => {
                return(
                    <div key={div.id}>
                    <h2>{div.name}</h2>
                    <h3>{div.id}</h3>
                    <Button onClick={()=>this.delDiv(div.id)}>del {div.name}</Button>
                    </div>
                )
            })}
            </div>
            )
        
        
    }
}

export default DivWrapper;