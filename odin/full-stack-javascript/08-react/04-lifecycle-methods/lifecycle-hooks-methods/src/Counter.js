import React, { Component } from "react";

const ErrorComponent = (props) => <div>{props.ignore}</div>

export default class extends Component {
    constructor(props) {
        console.log("Counter: CONSTRUCTOR");
        super(props);

        this.state = {
            counter: 0,
        }

        this.incrementCounter = () => this.setState({counter: this.state.counter + 1});
        this.decrementCounter = () => this.setState({counter: this.state.counter - 1});
    }

    static getDerivedStateFromProps(props, state) {
        console.log("Counter: GET DERIVED STATE FROM PROPS");
        console.log("----------------------------");
        if (props.seed
            && state.seed !== props.seed) {
                return {
                    seed: props.seed,
                    counter: props.seed,
                }
            } 
        return null;
    }

    componentDidMount() {
        console.log("Counter: COMPONENT DID MOUNT");
        console.log("----------------------------");
    }

    shouldComponentUpdate(nextProps, nextState) {
        if(nextProps.propToIgnore &&
            this.props.propToIgnore !== nextProps.propToIgnore) {
                console.log("Counter: SHOULD COMPONENT UPDATE -- DO NOT RENDER");
                console.log("----------------------------");
                return false;
            }

        console.log("Counter: SHOULD COMPONENT UPDATE -- RENDER");
        console.log("----------------------------");
        return true; 
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log("Counter: GET SNAPSHOT BEFORE UPDATE");
        console.log("----------------------------");
        return null;
    }

    render() {
        console.log("Counter: RENDER", this.state.error);

        if (this.state.error) {
            <div>We have encountered an error. {this.state.error}</div>
        }

        return (
            <div>
                <div>
                    <button className="element" onClick={this.incrementCounter}>Increment</button>
                    <button className="element" onClick={this.decrementCounter}>Decrement</button>    
                </div>
                <div className="element">Counter: {this.state.counter}</div>
                <ErrorComponent />
            </div>
        );
    }

    componentDidUpdate() {
        console.log("Counter: COMPONENT DID UPDATE");
        console.log("----------------------------");
    }

    componentWillUnmount() {
        console.log("Counter: COMPONENT WILL UNMOUNT");
        console.log("----------------------------");
    }

    componentDidCatch(error, info) {
        console.log("Counter: COMPONENT DID CATCH");
    }
}