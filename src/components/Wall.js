import { exportComponentAsJPEG, exportComponentAsPDF, exportComponentAsPNG } from 'react-component-export-image';
import React, { Component } from 'react';
import styled from "styled-components";
import Frame2 from "./Frame2";

class Wall extends Component {
    constructor(props) {
        super(props);
        this.componentRef = React.createRef();
      }
    render() {
        return (
            <div >
            <h1 className="title">Modriaanator</h1>
            
            <WallWrapper>
                
                <Frame2 ref={this.componentRef} />
            </WallWrapper>
            <div className="buttonWrapper">
            <button onClick={() => exportComponentAsJPEG(this.componentRef)}>
         Export As JPEG
       </button>
       <button onClick={() => exportComponentAsPDF(this.componentRef)}>
         Export As PDF
       </button>
       <button onClick={() => exportComponentAsPNG(this.componentRef)}>
         Export As PNG
       </button>
       </div>
            </div>
        );
    }
}

export const WallWrapper = styled.div`
height: auto;
background: #fbfefb;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
margin: 0 auto;
`;

export default Wall;