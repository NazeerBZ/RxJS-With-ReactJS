
// import CounterAction from '../actions/counter'

const INITIAL_STATE = {
    decrementState: 0
}

export default function decrementCounter(state = INITIAL_STATE, action) {
    switch (action.type) {

        case 'DECREMENT':
            return Object.assign({}, state, { decrementState: state.decrementState - 1 });

        case 'DECREMENT_WITH_VALUE':
            return Object.assign({}, state, { decrementState: state.decrementState - action.val });

        default:
            return state
    }
}
