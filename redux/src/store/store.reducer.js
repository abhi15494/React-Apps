const initialState = {
    counter: 0,
    results: []
}

// Create Reducer
// Initialize with a reducer first then connected to store
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'INC_COUNTER': return { ...state, counter: state.counter + 1 }
        case 'ADD_COUNTER': return { ...state, counter: state.counter + action.payload }
        case 'DEC_COUNTER': return { ...state, counter: state.counter - 1 }
        case 'SUB_COUNTER': return { ...state, counter: state.counter - action.payload }
        case 'STORE_RESULT': return { ...state, results: [...state.results, {id: new Date, value: state.counter}] }
        // case 'STORE_RESULT': return { ...state, results: state.results.concat({id: new Date, value: state.counter}) }
        case 'DELETE_RESULT': return { ...state, counter: state.counter - action.payload }
        default: 
            return state
    }
}

export default reducer;