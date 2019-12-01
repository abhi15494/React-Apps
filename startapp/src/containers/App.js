import React from 'react';
import './App.css';

import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Persons/Cockpit/Cockpit';
import Hoc from '../hoc/hoc';

export default class App extends React.Component {
  constructor(props) {
    super(props); // For using props in our application
    console.log('[App.js] inside constructor: ', props)
    this.state = {
      person: [
        { id: '1', name: 'Abhi', age: 21 },
        { id: '2', name: 'Ram', age: 31 },
        { id: '3', name: 'Admin', age: 31 },
        { id: '4', name: 'Tama', age: 31 },
        { id: '5', name: 'Ankit', age: 41 }
      ],
      showPersons: true,
      otherState: 'some other value',
      toggleClicked: 0
    }
  }

  componentWillMount() {
    console.log('[App.js] inside componentWillMount: ');
  }

  componentDidMount() {
    console.log('[App.js] inside componentDidMount: ');
  }

  handleClick = (e) => {
    this.setState({
      ...this.state,
      person: [
        { id: '1', name: 'Abhi', age: 21 },
        { id: '2', name: 'MAXIMALON', age: 31 },
        { id: '3', name: 'Ankit', age: 41 }
      ]
    }, () => console.log('state updated'))
  }

  nameChangeHandler = (event, id) => {
    const personIndex = this.state.person.findIndex(val => val.id === id);
    const person = { ...this.state.person[personIndex] };
    person.name = event.target.value;
    const persons = [...this.state.person];
    persons[personIndex] = person;
    this.setState({
      ...this.state,
      person: persons
    })
  }

  togglePersonList = (e) => {
    // Better approach to handle async code is to get prevState beside of this state
    this.setState((prevState, prop) => ( 
      {
        showPersons: !prevState.showPersons,
        toggleClicked: prevState.toggleClicked + 1
      })
    )
  }

  deletePersonHandler = (index) => {
    const person = [...this.state.person];
    person.splice(index, 1);
    this.setState({
      ...this.state,
      person: person
    })
  };

  render() {
    console.log('[App.js] inside render: ');

    let persons = null;
    if (this.state.showPersons) {
      persons = (
        <Hoc>
          <Persons 
            person={this.state.person}
            delete={this.deletePersonHandler}
            changed={this.nameChangeHandler}
          />
        </Hoc>
      )
    }

    return (
      <Hoc className='App'>
        <Cockpit 
          showPerson={this.state.showPersons}
          apptitle={this.props.title}
          onToggled={this.togglePersonList}
        />

        <br/>
        <p>Clicked: {this.state.toggleClicked} times</p>
        <br/>

        {/* { this.state.showPersons ?   */}
        {persons}
        {/* : null   */}
      </Hoc>
    );

    // return React.createElement('div', { className: 'App' }, React.createElement('h1', null, 'I am H1 tag'));
  }
}