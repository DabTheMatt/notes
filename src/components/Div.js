import React from "react";

class Div extends React.Component {
    state = {
        divs: []
    }

    componentDidMount = () => {
        this.setState({
            divs: this.props.divs
        })
    }

    render () {
        return (
            <div>
                ppp
            </div>
        )
    }
}

export default Div;