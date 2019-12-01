import React from 'react';
import Hoc from '../../../hoc/hoc';
import './Cockpit.css';

// Help us usng media query and pseudo style in js inlining styling
import radium, { StyleRoot } from 'radium';
// TO handle media query we need special selector name STYLEROOT

const Cockpit = props => {
    // Adding style using JavaScript
    const style = {
        buttonStyle: {
            padding: '10px 15px',
            border: 'none',
            fontWeight: 'bold',
            color: 'white',
            backgroundColor: 'green',
            transform: 'scale(0.9)',
            // Inserting pseudo selector in javascript using radium
            ':hover': {
                transform: 'scale(1.1)'
            }
        },
        contentStyle: {
            textAlign: 'center',
            padding: '1rem 0 2rem'
        }
    }

    const styleMedia = {
        width: '800px',
        margin: '0 auto',
        textAlign: 'center',
        backgroundColor: '#dddddd',
        '@media (min-width: 500px)': {
            backgroundColor: '#fefefe',
            width: '450px'
        }
    }
    // Changing styles using js
    if (!props.showPerson) style.buttonStyle.backgroundColor = 'red';

    const button = <button style={style.buttonStyle} onClick={props.onToggled}>Switch Change</button>;

    // Handling dynamic class concept
    let colorClass = [];
    if (props.showPerson) colorClass.push('green');
    else colorClass.push('red');
    colorClass.push('bold');
    return (<StyleRoot>
        <Hoc style={styleMedia}>
            <div style={style.contentStyle}>
                <h1>{props.apptitle}</h1>
                <p className={colorClass.join(' ')}>Lorem Ipsum Lat ona gold d roger.</p>
                {button}
            </div>
        </Hoc>
    </StyleRoot>
    );
}
export default radium(Cockpit);