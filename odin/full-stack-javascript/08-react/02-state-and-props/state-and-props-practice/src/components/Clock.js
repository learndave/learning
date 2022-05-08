import React, { Component } from "react";

class Clock extends Component {
    constructor(props) {
        super(props);
        this.state = {date: new Date()};
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.updateTime(),
            1000
        )
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    updateTime() {
        this.setState({
            date: new Date()
        });
    }

    render() {
        return (
            <div>
                <h1>Current Time</h1>
                <h2>The time is {this.state.date.toLocaleTimeString()}.</h2>
            </div>
        )
    }
}

export default Clock; 