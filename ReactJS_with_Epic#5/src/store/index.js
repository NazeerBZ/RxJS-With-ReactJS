
import { createStore } from 'redux'
import { combineReducers, applyMiddleware } from 'redux';
import { combineEpics, createEpicMiddleware } from 'redux-observable';


import counterEpic from './epic/counter';
import incrementCounter from './reducers/incrementCounter';
import decrementCounter from './reducers/decrementCounter';

//combine epics
const rootEpic = combineEpics(
    counterEpic.decrement,
    counterEpic.increment,
);

export const rootReducer = combineReducers({
    incrementCounter,
    decrementCounter
})

//creating middleware
const epicMiddleware = createEpicMiddleware(rootEpic);
//appling middleware
// const createStoreWithMiddleware = applyMiddleware(epicMiddleware)(createStore);

const store = createStore(rootReducer, applyMiddleware(epicMiddleware))

// creating store with middleware
// const store = createStoreWithMiddleware(
//     rootReducer,
//     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() //this line will enable redux dev tool
// )

store.subscribe(() =>
    console.log(store.getState())
);

export default store;