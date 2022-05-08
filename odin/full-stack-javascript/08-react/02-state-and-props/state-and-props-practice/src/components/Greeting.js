import React, { Component } from "react";

class Greeting extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { name } = this.props;

        return (
            <h1 className="greeting">
                Hello, {name}!
            </h1>
        );
    }
}

export default Greeting;