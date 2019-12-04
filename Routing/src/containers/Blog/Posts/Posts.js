import React from 'react';
import axios from '../../../axios';
import Post from '../../../components/Post/Post';
import './Posts.css';

import { Link, Route } from 'react-router-dom';
import FullPost from '../FullPost/FullPost';

export default class Posts extends React.Component {
    state = {
        posts: [],
        selectedPostId: null,
        error: false
    }

    postSelectedHandler = (id) => {
        // this.setState({selectedPostId: id});

        // Routing programatically in React JS 
        // this.props.history.push('/' + id);
        this.props.history.push({ pathname: this.props.match.url + '/' + id });
    }

    componentDidMount() {
        console.log(this.props);
        axios.get('/posts')
            .then(response => {
                const posts = response.data.slice(0, 4);
                const updatedPosts = posts.map(post => {
                    return {
                        ...post,
                        author: 'Max'
                    }
                });
                this.setState({ posts: updatedPosts });
                // console.log( response );
            })
            .catch(error => {
                // console.log(error);
                this.setState({ error: true });
            });
    }

    render() {
        let posts = <p style={{ textAlign: 'center' }}>Something went wrong!</p>;
        if (!this.state.error) {
            posts = this.state.posts.map(post => {
                // Routing Via Link 
                // ------------------------------------------------------------------------------------------
                // return <Link to={'/' + post.id} key={post.id}>
                //     <Post 
                //         title={post.title} 
                //         author={post.author}
                //         clicked={() => this.postSelectedHandler(post.id)} />;
                // </Link>
                // ------------------------------------------------------------------------------------------

                // Routing Programtically - Go to postSelectedHandler() function
                // -------------------------------------------------------------------------------------------
                return <Post key={post.id} title={post.title} author={post.author} clicked={() => this.postSelectedHandler(post.id)} />
                //  ------------------------------------------------------------------------------------------
            });
        }

        return <div>
            <section className="Posts">
                {posts}
            </section>
            {/* CHILD ROUTE */ }
            <Route path={this.props.match.url + "/:id"} exact={true} component={FullPost} />
            {/* ------------------------------------------------------------------------------------------- */ }
        </div>
    }
}