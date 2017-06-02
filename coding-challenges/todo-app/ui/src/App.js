import React, {Component} from 'react';
import TodoForm from './Form';
import TodoList from './List';
import TodoFilter from './Filter';
import StyleOverrides from './StyleOverrides.css'

class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            todoList: [this.constructTodo('go fishing'), this.constructTodo('go hunting'), this.constructTodo('mow lawn')]
        }
    }

    constructTodo = (text) => {
        return { completed: false, name: text, id: (Math.floor(Math.random() * 10000))}
    }

    addTodoItem = (todoText) => {
        const todoList = this.state.todoList;
        todoList.push(this.constructTodo(todoText));
        this.setState({
            TodoList: todoList
        })
    }

    render() {

        const todoList = this.state.todoList.map((todo) => {
            return <TodoList key={todo.id} details={todo} />
        })

        return (
            <div className="app">
                <div className="row text-center">
                    <h1>todos</h1>
                </div>
                <div className="card">
                    <TodoForm addTodoItem={this.addTodoItem}/>
                    {todoList}
                    <TodoFilter/>
                </div>
            </div>
        );
    }
}

export default App;
