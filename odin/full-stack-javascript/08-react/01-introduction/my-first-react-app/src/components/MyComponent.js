import React, { Component } from "react";

class MyComponent extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const {title, someFunction} = this.props;

        return (
            <div>
                <h1>{title}</h1>
                <button onClick={someFunction}>Click Me!</button>
            </div>
        );
    }
}

export default MyComponent;