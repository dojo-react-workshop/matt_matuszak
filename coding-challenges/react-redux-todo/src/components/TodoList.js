import React from 'react'

import TodoItem from './redux/TodoItem'

const TodoList = ({todos}) => {

    console.log('TodoList() todos-->', todos)

    return (
            <div className="girdContainer">
                <div className="row">
                    <div className="small-12 columns">

                        <table className="table">
                            <thead>
                                <tr>
                                    <th>Completed</th>
                                    <th>Task Name</th>
                                    <th>Created</th>
                                    <th>Id</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    todos.map((todo) => {
                                        return <TodoItem key={todo.id} {...todo} />
                                    })
                                }
                            </tbody>
                        </table>

                    </div>
                </div>
            </div>
    );
}

export default TodoList
