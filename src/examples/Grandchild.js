import React, { Component } from 'react';

class Grandchild extends Component {
    render() {
        return (
            <div style={{background:"white", padding:"1rem"}}>
                <p style={{ color: this.props.colorFromHome }}>Grandchild</p>
            </div>
        );
    }
}

export default Grandchild;