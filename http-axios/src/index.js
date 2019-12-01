import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import axios from 'axios';

// Setting defaults in every request in AXIOS configuration
axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com';

// Adding auth token in common request for AXIOS
axios.defaults.headers.common['AUTHENTICATION'] = 'AUTH_TOKEN';

// Setting up default content type during post requests
axios.defaults.headers.post['Content-Type'] = 'application/json';

// Request Interceptor in AXIOS i.e. getting track on every child API's
axios.interceptors.request.use(
    request => {
        console.log(request);
        return request;
    }, error => {
        console.error(error);
        return Promise.reject(error);
    }
)

// Response Interceptor in AXIOS i.e. getting track on every child API's
axios.interceptors.response.use(
    response => {
        console.log(response);
        return response;
    }, error => {
        console.log(error);
        return Promise.reject(error);
    }
);

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
