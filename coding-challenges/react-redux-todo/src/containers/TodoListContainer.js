import React from 'react'
import {connect} from 'react-redux'

import TodoList from '../components/TodoList'


const filterTodos = (todos, filterType) => {
    switch (filterType) {
        case 'All':
            return todos;
        case 'Active':
            return todos.filter(todo => !todo.completed);
        case 'Completed':
            return todos.filter(todo => todo.completed);
        default:

    }
}

const mapStateToProps = (state) => {
    return {
        todos: filterTodos(state.todos, state.filter)
    }
}

const TodoListContainer = connect(mapStateToProps, null)(TodoList);

export default TodoListContainer
