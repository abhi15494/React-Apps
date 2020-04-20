import React from 'react';
import './Modal.css';
import { CSSTransition } from 'react-transition-group';

const timing = {
    enter: 1000,
    exit: 1000
}

const Modal = (props) => {
    // CSS transition is same as traisition but
    // Ivt handle classes instead of function
    return <CSSTransition
        in={props.show}
        timeout={timing}
        mountOnEnter
        unmountOnExit
        classNames="fade-slide"
    // we can change the classnames by using a JS object
    // enter, enterActive,
    // exit, exitActive,
    // appear, appearActive


    // This classname is used to generate some new classes by appending
    // > fade-slide-enter
    // > fade-slide-enter-active
    // > fade-slide-exit
    // > fade-slide-exit-active
    // So generate those classes in the Global CSS file.
    >
        {/* DON't need a function here */}
        <div className="Modal">
            <h1>A Modal</h1>
            <button className="Button" onClick={props.closed}>Dismiss</button>
        </div>
    </CSSTransition>
}

export default Modal;