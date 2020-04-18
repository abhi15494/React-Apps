import React from 'react';

import './Backdrop.css';

const backdrop = (props) => {
    const classes = ['Backdrop', props.show ? 'BackdropOpen' : 'BackdropClose']
    return <div onClick={props.closed} className={classes.join(' ')}></div>

};

export default backdrop;