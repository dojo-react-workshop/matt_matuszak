import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { createStore, combineReducers }  from 'redux';
import todoReducer from './TodoReducer'
import visibilityReducer from './VisibilityReducer'

const composedReducers = combineReducers( {
    todos: todoReducer
    , filter: visibilityReducer
});

const store = createStore(composedReducers);

const render = () => {
    ReactDOM.render(<App {...store.getState()} />, document.getElementById('root'));
}

store.subscribe(render);
render();

export { store }
