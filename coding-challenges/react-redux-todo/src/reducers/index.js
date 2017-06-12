import { combineReducers } from 'redux'

import { Filter as FilterReducer } from './Filter'


export const appReducers = combineReducers({
    filter: FilterReducer
})
