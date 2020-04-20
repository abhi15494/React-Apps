import React, { Component } from 'react';

import './List.css';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

class List extends Component {
    state = {
        items: [1, 2, 3]
    }

    addItemHandler = () => {
        this.setState((prevState) => {
            return {
                items: prevState.items.concat(prevState.items.length + 1)
            };
        });
    }

    removeItemHandler = (selIndex) => {
        this.setState((prevState) => {
            return {
                items: prevState.items.filter((item, index) => index !== selIndex)
            };
        });
    }

    render() {
        const listItems = this.state.items.map((item, index) => (
            <CSSTransition
                key={index}
                timeout={500}
                classNames="fade"
            >
                <li
                    className="ListItem"
                    onClick={() => this.removeItemHandler(index)}>{item}</li>
            </CSSTransition>
        ));

        return (
            <div>
                <button className="Button" onClick={this.addItemHandler}>Add Item</button>
                <p>Click Item to Remove.</p>
                <TransitionGroup className="List">
                    {listItems}
                </TransitionGroup>
            </div>
        );
    }
}

export default List;