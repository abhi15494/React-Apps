import React from 'react';
import Person from './Person/Person';
import Hoc from '../../hoc/hoc';
import withClass from '../../hoc/withClass';

class Persons extends React.Component {
    constructor(props) {
        super(props); // For using props in our application
        console.log('[Persons.js] inside constructor: ', props)
    }

    componentWillMount() {
        console.log('[Persons.js] inside componentWillMount');
    }

    componentDidMount() {
        console.log('[Persons.js] inside componentDidMount');
    }

    componentWillReceiveProps(nextProp) {
        console.log('[UPDATE Persons.js] inside componentWillReceiveProps: ', nextProp);
    }

    shouldComponentUpdate(nextProp, nextState) {
        console.log('[UPDATE Persons.js] inside shouldComponentUpdate: ', nextProp, nextState);
        return true;
    }

    componentDidUpdate() {
        console.log('[Persons.js] inside componentDidUpdate');
    }

    render() {
        console.log('[Persons.js] inside render');
        const persons = this.props.person.map((val, index) =>
            <Person
                key={val.id}
                name={val.name}
                age={val.age}
                changed={(event) => this.props.changed(event, val.id)}
                delete={() => this.props.delete(index)}
            />
        )

        return <Hoc>{persons}</Hoc>
    }

}

export default withClass(Persons, 'PersonClass')