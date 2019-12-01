import * as actionType from './../store.action';

const initialState = {
    results: []
}
// Create Reducer
// Initialize with a reducer first then connected to store
const reducer = (state = initialState, action) => {
    let date = new Date();
    switch (action.type) {
        case actionType.STORE_RESULT: return { ...state, results: [...state.results, {id: date.getSeconds(), value: action.payload}] }
        // case actionType.STORE_RESULT: return { ...state, results: state.results.concat({id: new Date, value: state.counter}) }
        case actionType.DELETE_RESULT: {
            console.log('store clicked', action.payload, state)
            // const newarr = [...state.results];
            // newarr.splice(state.results.findIndex(v => v.id===action.payload), 1);
            // OR
            const newarr = state.results.filter(val => val.id !== action.payload)
            return { ...state,  results: newarr}
        }
        default: 
            return state
    }
}

export default reducer;