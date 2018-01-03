import React, { Component } from 'react';
import { connect } from 'react-redux';
import CounterAction from './../../store/actions/counter'
import Counter from '../../components/counter/Counter'

function mapStateToProps(state) {
    return {

        incCounter: state.incrementCounter.incrementState,
        decCounter: state.decrementCounter.decrementState

    };
}

function mapDispatchToProps(dispatch) {
    return {
        increment: () => dispatch(CounterAction.increment()),
        incrementWithValue: (value) => { dispatch(CounterAction.incrementWithValue(value)) },
        incrementAgain: () => { dispatch(CounterAction.incrementWithValue(3)) },
        decrement: () => dispatch(CounterAction.decrementWithValue(4)),
        asyncIncrement: () => { dispatch(CounterAction.asyncIncrement()) },
        asyncDecrement: () => { dispatch(CounterAction.asyncDecrement()) },
    };
}

class App extends Component {

    constructor() {
        super();
        this.state = {
            counterVal: 0
        };
    }
    valueChange(event) {
        this.setState({ counterVal: parseInt(event.target.value, 10) });
    }

    updateCounterWithInput() {
        this.props.incrementWithValue(this.state.counterVal);

    }

    updateCounterWithOne() {
        this.props.increment();
    }

    render() {
        return (
            <div >
                <Counter counter={this.props.incCounter + this.props.decCounter} />
                <input type="number" onChange={this.valueChange.bind(this)} /><br />
                <hr />
                <div>
                    <div>
                        App.jsx
            </div>
                    Smart Component {this.props.incCounter + this.props.decCounter}
                    <div>
                        <br />

                        <button onClick={this.updateCounterWithInput.bind(this)}>Increment User Input </button><br />
                        <button onClick={this.updateCounterWithOne.bind(this)}>Increment</button><br />
                        <button onClick={this.props.decrement}>Decrement value with 4</button><br />
                        <button onClick={this.props.incrementAgain}>Increment value with 3</button><br />
                        <button onClick={this.props.asyncDecrement}>Async Decrement</button><br />
                        <button onClick={this.props.asyncIncrement}>Async Increment</button><br />
                    </div>
                </div>
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);