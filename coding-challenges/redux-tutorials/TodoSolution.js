import { createStore, combineReducers }  from 'redux';
import todoReducer from './TodoReducer'
import visibilityReducer from './VisibilityReducer'


const composedReducers = combineReducers( {
    // ES6 shortcuts!
    // todoReducer: todoReducer
    // , visibilityReducer: visibilityReducer }
    todoReducer
    , visibilityReducer
});


//// old school
// const composedReducers = (state = {}, action) => {
//     return {
//         todoReducer: todoReducer(state.todoReducer, action)
//         , visibilityReducer: visibilityReducer(state.visibilityReducer, action)
//     }
// }


const store = createStore(composedReducers);

console.log('initial state-->',store.getState())

store.dispatch({type: 'ADD', text: 'go fishing', id: 0})
store.dispatch({type: 'ADD', text: 'go hunting', id: 1})
store.dispatch({type: 'ADD', text: 'mow lawn', id: 2})

console.log('after first add-->', store.getState());

store.dispatch({type: 'VISIBILITY_FILTER', filter: 'COMPLETED'});

console.log('after visibility filter-->', store.getState());
