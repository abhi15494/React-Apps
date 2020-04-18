import React, { Component } from "react";
import Transition from 'react-transition-group/Transition';
import "./App.css";
import Modal from "./components/Modal/Modal";
import Backdrop from "./components/Backdrop/Backdrop";
import List from "./components/List/List";

class App extends Component {
  state = {
    showBlock: false,
    modalIsOpen: false
  }

  showModal = () => {
    this.setState({ modalIsOpen: true })
  }

  closeModal = () => {
    this.setState({ modalIsOpen: false })
  }

  render() {
    return (
      <div className="App">
        <h1>React Animations</h1>
        <hr />
        <button className="Button" onClick={() => this.setState((prevstate) => ({ showBlock: !prevstate.showBlock }))}>Toggle</button>
        <Transition
          in={this.state.showBlock}
          // In means condition weather element show or not
          timeout={1000}
          // i.e. for 300 ms for entry and exit
          
          // Attribute to handle mount and unmount of the elements
          mountOnEnter
          unmountOnExit

          // Events
          onEnter={() => console.log('OnEnter')}
          onEntering={() => console.log('OnEntering')}
          onEntered={() => console.log('OnEntered')}
          onExit={() => console.log('onExit')}
          onExiting={() => console.log('onExiting')}
          onExited={() => console.log('onExited')}
        >
          {
            // 4 states of transitions: ENTERING, ENTERED, EXITING, EXITED
            state => {
              return <div style={{
                backgroundColor: 'red',
                width: '5rem',
                minHeight: state === 'exiting' ? '0rem' : state === 'entered' ? '5rem' : '0rem',
                margin: state === 'exiting' ? '0rem auto' : state === 'entered' ? '1rem auto' : '0rem auto',
                transition: '300ms all',
                opacity: state === 'exiting' ? 0 : state === 'entered' ? 1 : 0
              }} >
                {state}
              </div>
            }
          }
        </Transition>

        <hr />
        <Modal show={this.state.modalIsOpen} closed={this.closeModal} />
        {this.state.modalIsOpen && <Backdrop show={this.state.modalIsOpen} closed={this.closeModal} />}

        <button className="Button" onClick={this.showModal}>Open Modal</button>
        <h3>Animating Lists</h3>
        <List />
      </div >
    );
  }
}

export default App;
