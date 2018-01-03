
// import CounterAction from '../actions/counter'

const INITIAL_STATE = {
    incrementState: 0
}

function incrementCounter(state = INITIAL_STATE, action) {
    switch (action.type) {

        case 'INCREMENT':
            return Object.assign({}, state, { incrementState: state.incrementState + 1 });
        
        case 'INCREMENT_WITH_VALUE':
            return Object.assign({}, state, { incrementState: state.incrementState + action.val });

        default:
            return state
    }
}

export default incrementCounter;