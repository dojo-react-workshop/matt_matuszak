import { combineReducers } from 'redux'

import { Todo as TodoReducer } from './Todo'


export const appReducers = combineReducers({
    todos: TodoReducer
})
