import React, { Component } from 'react';
import axios from '../../axios.config';
import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import './Blog.css';

// Stateful Component
class Blog extends Component {

    // To set state and inital data
    constructor() {
        super();
        this.state = {
            posts: [],
            selectedPostId: null,
            error: false
        }
    }

    // This method will run after all component mounted i.e render children too.
    componentDidMount() {
        // Axios GET request for all posts 
        axios.get('/posts').then(response => {
            const posts = response.data.slice(0, 4);
            const updatedPosts = posts.map(post => ({ ...post, author: 'max' }));
            this.setState({
                posts: updatedPosts
            })
        }).catch(error => this.setState({ error: true }))
    }

    propClicked(id) {
        this.setState({ selectedPostId: id })
    }

    render() {
        let posts = <p>Something went wrong!</p>
        if (!this.state.error)
            posts = this.state.posts.map(val =>
                <Post
                    key={val.id}
                    title={val.title}
                    author={val.author}
                    clicked={event => this.propClicked(val.id)}
                />
            )
        return (
            <div>
                <section className="Posts">
                    {posts}
                </section>
                <section>
                    <FullPost
                        id={this.state.selectedPostId}
                    />
                </section>
                <section>
                    <NewPost />
                </section>
            </div>
        );
    }
}

export default Blog;