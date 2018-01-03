
export default class CounterAction {

    // static INCREMENT = "INCREMENT";
    // static DECREMENT = "DECREMENT";
    // static INCREMENT_WITH_VALUE = "INCREMENT_WITH_VALUE";
    // static DECREMENT_WITH_VALUE = "DECREMENT_WITH_VALUE";

    // static INCREMENT_ASYNC = "INCREMENT_ASYNC";
    // static DECREMENT_ASYNC = "DECREMENT_ASYNC";

    // static functions to be mapped with dispatch in component
    static increment() {
        return {
            type: 'INCREMENT'
        }
    }

    static decrement() {
        return {
            type: 'DECREMENT'
        }
    }

    static incrementWithValue(value) {
        return {
            type: 'INCREMENT_WITH_VALUE',
            val: value
        }
    }

    static decrementWithValue(value) {
        return {
            type: 'DECREMENT_WITH_VALUE',
            val: value
        }
    }

    static asyncIncrement() {
        console.log("inside action");
        return {
            type: 'INCREMENT_ASYNC'
        }
    }
    static asyncDecrement() {
        return {
            type: 'DECREMENT_ASYNC'
        }
    }
}