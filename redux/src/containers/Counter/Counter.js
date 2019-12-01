import React, { Component } from 'react';

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';
import * as actionTypes from '../../store/store.action';
// Handling and getting state from store
// connect is a higher order component function 
import { connect } from 'react-redux';

class Counter extends Component {
    state = {
        counter: 0,
        step: 10
    }

    counterChangedHandler = (action, value) => {
        switch (action) {
            case 'inc':
                this.setState((prevState) => { return { counter: prevState.counter + 1 } })
                break;
            case 'dec':
                this.setState((prevState) => { return { counter: prevState.counter - 1 } })
                break;
            case 'add':
                this.setState((prevState) => { return { counter: prevState.counter + value } })
                break;
            case 'sub':
                this.setState((prevState) => { return { counter: prevState.counter - value } })
                break;
        }
    }

    render() {
        return (
            <div>
                <CounterOutput value={this.props.ctr} />
                <CounterControl label="Increment" clicked={() => this.props.onIncCounter()} />
                <CounterControl label={'Add ' + this.state.step} clicked={() => this.props.onAddCounter(this.state.step)} />
                <CounterControl label="Decrement" clicked={() => this.props.onDecCounter()} />
                <CounterControl label={'Subtract ' + this.state.step} clicked={() => this.props.onSubCounter(this.state.step)} />
                <hr/>

                <button onClick={() => this.props.onStoreResult(this.props.ctr)}>Store Result</button>
                <ul>
                    {
                        this.props.storedResult.map( val =>
                            <li key={val.id}>
                                <a onClick={() => this.props.onDeleteResult(val.id)}>
                                    {val.value}
                                </a>
                            </li>
                        )
                    }
                </ul>
            </div>
        );
    }
}

// Do after class
// Configuration 1
// Fetching state from store and assigning the value to props of <Counter/>
const mapStateToProps = state => {
    return {
        ctr: state.ctr.counter,
        storedResult: state.res.results
    };
}

// Configuration 2: ActionTypes 
const mapActionToProps = dispatch => {
    return {
        onIncCounter: () => dispatch({ type: actionTypes.INC_COUNTER }),
        onAddCounter: val => dispatch({ type: actionTypes.ADD_COUNTER, payload: val }),
        onDecCounter: () => dispatch({ type: actionTypes.DEC_COUNTER }),
        onSubCounter: val => dispatch({ type: actionTypes.SUB_COUNTER, payload: val }),

        onStoreResult: result => dispatch({ type: actionTypes.STORE_RESULT, payload: result }),
        onDeleteResult: id => dispatch({ type: actionTypes.DELETE_RESULT, payload: id }),
    }
}

// To connect component to store; and 
// connect( state_register, action_register )
export default connect(mapStateToProps, mapActionToProps)(Counter);