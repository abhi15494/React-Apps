import * as actionType from './../store.action';

const initialState = {
    counter: 0
}
// Create Reducer
// Initialize with a reducer first then connected to store
const reducer = (state = initialState, action) => {
    let date = new Date();
    switch (action.type) {
        case actionType.INC_COUNTER: return { ...state, counter: state.counter + 1 }
        case actionType.ADD_COUNTER: return { ...state, counter: state.counter + action.payload }
        case actionType.DEC_COUNTER: return { ...state, counter: state.counter - 1 }
        case actionType.SUB_COUNTER: return { ...state, counter: state.counter - action.payload }
        default: return state;
    }
}

export default reducer;