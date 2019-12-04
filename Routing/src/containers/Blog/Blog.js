import React, { Component } from 'react';
// import axios from 'axios';

import './Blog.css';
import Posts from './Posts/Posts';
// import FullPost from './FullPost/FullPost';

// -----------------------------------------------------------------------------------------------
//  For normal routerLink cases we can use - Link
//  But styling and classes routerLinkActive case, 
//  we need - NavLink that have 
//      - activeClassName="CLASS_NAME"
//      - activeStyle={{STYLE_PROPERTIES}}
// -----------------------------------------------------------------------------------------------
// Switch - It's a react functionality that is responsible to load one Route at a time
// because in case of parameters two routes loaded at a time.
// -----------------------------------------------------------------------------------------------
// Redirect - from-to redirect url form one component to another
// -----------------------------------------------------------------------------------------------

import { Route, NavLink, Switch, Redirect } from "react-router-dom";
import asyncComponent from '../../hoc/async';

// -----------------------------------------------------------------------------------------------
// LAZY-LOADING NewPost Dynamic
// -----------------------------------------------------------------------------------------------
// import NewPost from './NewPost/NewPost';
// -----------------------------------------------------------------------------------------------
const AsyncNewPost = asyncComponent(() => {
    return import('./NewPost/NewPost');
});
// -----------------------------------------------------------------------------------------------

class Blog extends Component {
    state = {
        // Setting up guards -----------------------------------------
        auth: true
    }

    render() {

        return (
            <div>
                <header>
                    <nav>
                        <ul>
                            <li><NavLink to="/posts"
                                // Edge case
                                // When a single post is loaded then this link is not activated because / is prefix of everywhere
                                // So we need to make sure that link can be 'post/:id' not '/:id' to handle conflict between other routes
                                exact
                                activeClassName="my-active"
                                activeStyle={{
                                    textDecoration: 'underline',
                                    color: 'teal'
                                }}
                            >Posts</NavLink></li>
                            <li><NavLink to={
                                {
                                    // pathname: this.props.match.url + '/new-post', // Relateive URL
                                    pathname: '/new-post', // Absolute URL
                                    hash: '#submit',
                                    search: '?quick-submit=true'
                                }
                            }>New Post</NavLink></li>
                        </ul>
                    </nav>
                </header>
                {/* <Route path="/" render={() => <h1>Home 2</h1>} /> */}
                <Switch>
                    {/* ------------------------------------------------------------------------------------------------ */}
                    {/* ITS GUARD IN REACT */}
                    {/* ------------------------------------------------------------------------------------------------ */}
                    {this.state.auth ? <Route path="/new-post" component={AsyncNewPost} /> : null}
                    {/* ------------------------------------------------------------------------------------------------ */}
                    <Route path="/posts" component={Posts} />
                    <Redirect exact from="/" to="/posts" />
                    {/* SETTING PARAMETERS IN POSTS and make sure that query param is available in the end for working*/}
                    {/* <Route path="/:id" exact={true} component={FullPost} /> */}
                    {/* NOTE-USED FOR CHILD ROUTES IN POSTS.JS */}

                    {/* HANDLING 404 Case, if path is not given it will catch all paths automatically and best way to handle 404 errors */}
                    <Route render={() => <h1>Not found</h1>}></Route>
                </Switch>
            </div>
        );
    }
}

export default Blog; 