import React from 'react'

import Todo from '../containers/TodoContainer'

const TodoList = ({todos}) => {

    console.log('TodoList() todos-->', todos)

    return (
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
                                    return <Todo key={todo.id} {...todo} />
                                })
                            }
                        </tbody>
                    </table>

                </div>
            </div>
    );
}

export default TodoList
