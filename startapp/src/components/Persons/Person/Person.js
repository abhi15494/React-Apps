import React, { Component } from 'react';
import './Person.css';
import PropTypes from 'prop-types';

export default class Person extends Component {
    constructor(props) {
        super(props); // For using props in our application
        // console.log('[Person.js] inside constructor: ', props)
    }

    // componentWillMount() {
    //     console.log('[Person.js] inside componentWillMount: ');
    // }

    // componentDidMount() {
    //     console.log('[Person.js] inside componentDidMount: ');
    // }

    render() {
        // console.log('[Person.js] inside render: ');
        // let random = Math.random();
        // if(random > 0.7) {
        //     console.log(random)
        //     throw new Error('Something wrong with component PERSON');
        // }
        return (
            <div className="Person">
                <a
                    href="#"
                    style={{ float: 'right', textDecoration: 'none' }}
                    onClick={this.props.delete}
                    title={`Element id - ` + this.key}
                >&#10006;</a>
                <p>I am person: {this.props.name} age: {this.props.age} </p>
                {/* <p>{this.props.children}</p> */}
                <input type="text" onChange={this.props.changed} value={this.props.name} placeholder="Enter Anything"></input>
            </div>
        )
    }
}

Person.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    changed: PropTypes.func,
    delete: PropTypes.func
}