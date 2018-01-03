import * as Rx from "rxjs";
import CounterAction from '../actions/counter'


//Following epic functions can be separate files 
//****FOR EXAMPLE******//:
//     export function exampleEpic(action$) {
//   return action$
//     .ofType(EXAMPLE_TYPE)
//     .mapTo({ type: 'ANOTHER_EXAMPLE' });
// }

export default class CounterEpic {

    static increment = (action$) => {

        return action$.ofType('INCREMENT_ASYNC').delay(1000).mergeMap(() => {
            return Rx.Observable.of(CounterAction.increment())
        })
    }

    static decrement = (action$) => {

        return action$.ofType('DECREMENT_ASYNC').delay(1000).mergeMap(() => {
            return Rx.Observable.of(CounterAction.decrement());
        })
    }
}


// export let counterEpic = new CounterEpic();