import React from 'react'
import { connect } from 'react-redux'

import TodoItem from './redux/TodoItem'
import TodoService from '../services/TodoService'

class TodoList extends React.Component {

    constructor(props) {
        super(props);
        this.todoService = new TodoService();
    }

    state = {
        todos: null
        , errorRetrievingTodos: false
    }

    retrieveAndUpdateTodos(filterSpec) {
        this.todoService.getTodos({filter: filterSpec})
            .then((response) => {
                console.log(response.data);
                this.setState({todos: response.data, errorRetrievingTodos: false});
            })
            .catch(error => {
                console.error(error)
                this.setState({todos: [], errorRetrievingTodos: true});
            })
    }

    componentDidMount() {
        console.log('TodoList.componentDidMount() props-->', this.props)
        this.retrieveAndUpdateTodos(this.props.filter)
    }

    componentWillReceiveProps(nextProps) {
        console.log('TodoList.componentWillReceiveProps() nextProps-->', nextProps)
        if (this.props.filter !== nextProps.filter) {
            this.retrieveAndUpdateTodos(nextProps.filter)
        }
    }


    render() {
        console.log('TodoList.render() state-->', this.state)

        let todoItemListToShow = this.state.todos;
        if (this.state.errorRetrievingTodos) {
            todoItemListToShow = (<tr><td colSpan='4'><span>Problems Retrieving Todos</span></td></tr>)
        } else if (todoItemListToShow === null) {
            todoItemListToShow = (<tr><td colSpan='4'><span className="loading-indicator small"></span></td></tr>);
        } else if (todoItemListToShow.length <= 0) {
            todoItemListToShow = (<tr><td colSpan='4'><span>No Results Found</span></td></tr>);
        } else {
            todoItemListToShow = this.state.todos.map((todo) => {
                return <TodoItem key={todo.id} {...todo} />
            })
        }

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
                                    // todos.map((todo) => {
                                    //     return <TodoItem key={todo.id} {...todo} />
                                    // })
                                    todoItemListToShow
                                }
                            </tbody>
                        </table>

                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        filter: state.filter
    }
}

export default connect(mapStateToProps)(TodoList)
