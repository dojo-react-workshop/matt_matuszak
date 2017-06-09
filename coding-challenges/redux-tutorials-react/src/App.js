import React, {Component} from 'react';
import {store} from './index'

const FilterLink = ({filter, currentFilter, children, onFilterClick}) => {

    if (filter === currentFilter)
        return <span style={{
            paddingRight: '15px'
        }}>{children}</span>

    return (
        <a style={{
            paddingRight: '15px'
        }} href="" onClick={(e) => onFilterClick(e,filter)}>{children}</a>
    )
}

const Todo = ({click, text, completed, id}) => {
    // console.log(click, text, completed)
    return (
        <li onClick={click} style={{
            textDecoration: (completed)
                ? 'line-through'
                : 'none'
        }}>{text}</li>
    )
}

const TodoList = ({todoList, click}) => {
    return (
        <ul>
            {todoList.map((todo) => {
                return <Todo key={todo.id} {...todo}
                    click={() => click(todo.id)}/>
            })}
        </ul>
    )
}

const TodoForm = ({textEntry, click, text}) => {
    return (
        <div>
            <input name="taskText" type="text" onChange={textEntry}/>
            <button className="tiny" onClick={() => click(text)}>New Task</button>
        </div>
    )
}

const Footer = ({currentFilter, onFilterClick}) => {
    return (
        <div>
            <FilterLink filter='ALL' onFilterClick={onFilterClick} currentFilter={currentFilter}>All</FilterLink>
            <FilterLink filter='ACTIVE' onFilterClick={onFilterClick} currentFilter={currentFilter}>Active</FilterLink>
            <FilterLink filter='COMPLETE' onFilterClick={onFilterClick} currentFilter={currentFilter}>Complete</FilterLink>
        </div>
    )
}

class App extends Component {

    state = {
        taskText: ''
    }

    todoTextChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    filterTodos = (todos, filter) => {
        return (todos.filter(todo => {
            switch (filter) {
                case 'ALL':
                    return true;
                case 'ACTIVE':
                    return !todo.completed;
                case 'COMPLETE':
                    return todo.completed;
                default:
                    false;
            }
        }))
    }

    render() {

        const filteredTodos = this.filterTodos(this.props.todos, this.props.filter)
        // console.log(filteredTodos);
        return (
            <div className="gridContainer">
                <div className="row">
                    <div className="small-12 columns small-centered">
                        <h1>Todo</h1>
                    </div>
                    <div className="small-12 columns">
                        <TodoForm
                            textEntry={this.todoTextChange}
                            text={this.state.taskText}
                            click={(text) => {
                                store.dispatch({
                                    type: 'ADD',
                                    text: text,
                                    id: Math.floor(Math.random() * 100000)
                                })
                            }} />
                    </div>
                    <div className="small12 columns">

                        <Footer
                            currentFilter={this.props.filter}
                            onFilterClick={(e, filter) => {
                                e.preventDefault();
                                store.dispatch({type: 'VISIBILITY_FILTER', filter })
                            }} />

                        <div>
                            <TodoList
                                todoList={filteredTodos}
                                click={id => {
                                    console.log('id', id)
                                    store.dispatch({type: 'TOGGLE', id: id})
                                }} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
