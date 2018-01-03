import React, { Component } from 'react';
// import './Counter.css';

class Counter extends Component {

    // constructor() {
    //     super();
    //     this.state = {
    //         counterVal: 0
    //     };
    // }
    // valueChange(event) {
    //     this.setState({ counterVal: parseInt(event.target.value, 10) });
    // }

    // updateCounterWithInput() {
    //     this.props.update(this.state.counterVal);
    //     //this.props.incrementWithValue(this.state.counterVal);
    // }

    // updateCounterWithOne() {
    //     this.props.update(1);
    // }


    render() {
        return (
            <div >
                <div>
                    In Counter jsx
        </div>
                <div>
                    Dump Component {this.props.counter}
                    {/*<input type="number" onChange={this.valueChange.bind(this)} /><br />
                    <button onClick={this.updateCounterWithInput.bind(this)}>Increment User Input </button><br />
                    <button onClick={this.updateCounterWithOne.bind(this)}>Increment</button><br />*/}
                </div>
            </div>
        );
    }
}

export default Counter;