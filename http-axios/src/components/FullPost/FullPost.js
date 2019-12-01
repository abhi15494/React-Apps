import React, { Component } from 'react';
import axios from 'axios';
import './FullPost.css';

class FullPost extends Component {
    constructor() {
        super();
        this.state = {
            loadedPost: null
        }
    }

    componentDidUpdate() {
        // To handle regular update of state because component will 
        // continously updated and render infinitely.
        // So, do sideeffect with a certain condition
        if (
            this.props.id &&
            !this.state.loadedPost || (
                this.state.loadedPost &&
                this.state.loadedPost.id !== this.props.id
            )
        ) {
            // AXIOS get request for single post
            axios.get('/posts/' + this.props.id)
                .then(response => {
                    this.setState({ loadedPost: response.data })
                })
        }
    }

    deletePostHandler = () => {
        axios.delete('/posts/' + this.props.id).then(
            response => console.log(response)
        )
    }

    render() {
        let post = <p style={{ textAlign: 'center', fontSize: '2rem', padding: '3rem' }}>Please select a Post!</p>;
        // Handling loading and post view on basis of ajax call
        if (this.props.id)
            post = <p style={{ textAlign: 'center', fontSize: '2rem', padding: '3rem' }}>Loading...</p>;
        if (this.props.id && this.state.loadedPost)
            post = (
                <div className="FullPost">
                    <h1>{this.state.loadedPost.title}</h1>
                    <p>{this.state.loadedPost.body}</p>
                    <div className="Edit">
                        <button className="Delete" onClick={this.deletePostHandler}>Delete</button>
                    </div>
                </div>

            );
        return post;
    }
}

export default FullPost;