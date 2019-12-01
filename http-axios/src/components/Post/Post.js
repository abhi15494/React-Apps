import React from 'react';
import './Post.css';

// Functional component
const post = (props) => (
    // Method for handling click event on app state
    <article className="Post" onClick={props.clicked}>
        <h1>{props.title}</h1>
        <div className="Info">
            <div className="Author">{props.author}</div>
        </div>
    </article>
);

export default post;