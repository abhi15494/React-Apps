import React from 'react';
import ReactDOM from 'react-dom';

// Import REDUX in File
// "react-dom": "^16.12.0",
// "react-redux": "^5.1.2",
// "react-scripts": "^3.2.0",
// "redux": "^4.0.4"
import { createStore } from 'redux';

// Install & intialize react-redux
// Provider is helper component to inject store in react application
import { Provider } from 'react-redux';

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import reducer from './store/store.reducer';

const store = createStore(reducer);

ReactDOM.render(
    // To activate store in our application we use --Provider-- here
    <Provider store={store}>
        <div>
            <App />
        </div>
    </Provider>
    , document.getElementById('root'));
registerServiceWorker();
