import React from 'react'
import {connect} from 'react-redux'

import TodoList from '../components/TodoList'


const mapStateToProps = (state) => {
    return {
        todos: state.todos
    }
}

const TodoListContainer = connect(mapStateToProps, null)(TodoList);

export default TodoListContainer
