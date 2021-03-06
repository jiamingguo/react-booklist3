import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import App from './components/app';
import reducer from './reducers';

ReactDOM.render(
    <Provider store={createStore(reducer)}>
        <App />
    </Provider>
    , document.querySelector('.container')
);