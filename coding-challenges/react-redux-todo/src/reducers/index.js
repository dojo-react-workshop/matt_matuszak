import { combineReducers } from 'redux'

import { Filter as FilterReducer } from './Filter'
import { Todo as TodoReducer } from './Todo'


export const appReducers = combineReducers({
    filter: FilterReducer
    , todos: TodoReducer
})
