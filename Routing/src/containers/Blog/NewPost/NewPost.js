import React, { Component } from 'react';
import axios from 'axios';

import './NewPost.css';

import { Redirect } from 'react-router-dom';

class NewPost extends Component {
    state = {
        title: '',
        content: '',
        author: 'Max',
        submitted: false
    }

    componentDidMount() {
        // -------------------------------------------------------------------------------------------
        // GUARD IN CHILD COMPONENT 
        // -------------------------------------------------------------------------------------------
        // IF user not authenticated
        // this.props.history.push('/posts');
        // -------------------------------------------------------------------------------------------
        console.log(this.props);
    }

    postDataHandler = () => {
        const data = {
            title: this.state.title,
            body: this.state.content,
            author: this.state.author
        };
        axios.post('/posts', data)
            .then(response => {
                console.log(response);
                // -------------------------------------------------------------------------------
                // Method: 1
                // this.setState({ submitted: true });
                // -------------------------------------------------------------------------------
                // Method: 2
                // We dont need to use state in this.props.history methods
                // PUSH METHOD will add new path in the history
                // this.props.history.push('/posts');
                // PUSH METHOD will replace current path from the history
                this.props.history.replace('/posts');
                // -------------------------------------------------------------------------------

            });
    }

    render() {
        // -------------------------------------------------------------------------------
        // Conditional Redirect ---
        // -------------------------------------------------------------------------------
        // A simple method to redirect a page once form is submitted
        // Other way is on axios results method 
        // -------------------------------------------------------------------------------
        let redirect = null;
        if (this.state.submitted) {
            redirect = <Redirect to='/' />
        }
        return (
            <div className='NewPost'>
                {redirect}
                <h1>Add a Post</h1>
                <label>Title</label>
                <input type='text' value={this.state.title} onChange={(event) => this.setState({ title: event.target.value })} />
                <label>Content</label>
                <textarea rows='4' value={this.state.content} onChange={(event) => this.setState({ content: event.target.value })} />
                <label>Author</label>
                <select value={this.state.author} onChange={(event) => this.setState({ author: event.target.value })}>
                    <option value='Max'>Max</option>
                    <option value='Manu'>Manu</option>
                </select>
                <button onClick={this.postDataHandler}>Add Post</button>
            </div>
        );
    }
}

export default NewPost;