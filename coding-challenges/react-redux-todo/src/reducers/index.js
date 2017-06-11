import { combineReducers } from 'redux'

import { Todo as TodoReducer } from './Todo'
import { Filter as FilterReducer } from './Filter'


export const appReducers = combineReducers({
    todos: TodoReducer
    , filter: FilterReducer
})
