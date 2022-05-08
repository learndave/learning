import React, { Component } from "react";

class CountUp extends Component {
    constructor(props) {
        super(props);

        this.state = {
            count: 0,
        }

        this.countUp = this.countUp.bind(this);
    }

    countUp() {
        this.setState({
            count: this.state.count + 1,
        })
    }

    render() {
        return (
            <div>
                <button onClick={this.countUp}>Count Up</button>
                <p>I am number {this.state.count}</p>
            </div>
        )
    }
}

export default CountUp;