// RUN THIS FILE IN NODEJS CLI

// Creating store pattern 
// 1: Import Store
// 2: Initialize State
// 3: Create Reducer
// 4: Create Store
// 5: Create Subscription
// 6: Create Actions


// Redux build in Node 
const redux = require('redux');

// Initialize state
const initialState = {
    counter: 0
}

// Its a function for creating store
const createStore = redux.createStore;

// Create Reducer
// Initialize with a reducer first then connected to store
const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'INC_COUNTER': {
            return { ...state, counter: state.counter + 1 }
        }
        case 'ADD_COUNTER': {
            return { ...state, counter: state.counter + action.payload }
        }
        case 'DEC_COUNTER': {
            return { ...state, counter: state.counter - 1 }
        }
        case 'SUB_COUNTER': {
            return { ...state, counter: state.counter - action.payload }
        }
        default: 
            return state
    }
}

// Create Store
// Reducer is passed as an argument inside store
const store = createStore(rootReducer);
// console.log(store.getState());

// Create Subscriptions
// Make sure that not to manually called getstate
// It will automatically called getState()
store.subscribe(data => {
    console.log('[subscription]', store.getState())
})

// Dispatching Actions
// dispatch() is used to dispatch actions and take an object as an argument with 
// two properties - 'type' & 'payload'
store.dispatch({ type: 'INC_COUNTER' });
// console.log(store.getState());
store.dispatch({ type: 'ADD_COUNTER', payload: 10 });
// console.log(store.getState());
store.dispatch({ type: 'DEC_COUNTER' });
// console.log(store.getState());
store.dispatch({ type: 'SUB_COUNTER', payload: 10 });
// console.log(store.getState());
