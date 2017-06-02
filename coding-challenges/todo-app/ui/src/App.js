import React, {Component} from 'react';
import TodoForm from './Form';
import Todo from './Todo';
import TodoFilter from './Filter';
import StyleOverrides from './StyleOverrides.css'

class App extends Component {

    constructor(props) {
        super(props);

        const defaultList = [this.constructTodo('go fishing'), this.constructTodo('go hunting'), this.constructTodo('mow lawn')];
        defaultList.push(this.constructTodo('Already done??'))
        defaultList[defaultList.length-1].completed = true;

        const activeTodos = this.countActives(defaultList);
        this.state = {
            todoList: defaultList
            , activeCount: activeTodos
        }
    }

    countActives = (todoList) => {
        return todoList.reduce((count, todo) => {
            return (todo.completed === false) ? count+1 : count ;
        }, 0)
    }

    constructTodo = (text) => {
        return { completed: false, name: text, id: (Math.floor(Math.random() * 10000))}
    }

    updateTaskCompletionState = (id, state) => {
        const todoList = this.state.todoList;

        todoList.forEach((todo) => {
            if (todo.id === id) {
                todo.completed = state;
            }
        })
        this.setState({todoList: todoList, activeCount: this.countActives(todoList)});
    }

    updateTaskName = (id, name) => {
        const todoList = this.state.todoList;

        todoList.forEach((todo) => {
            if (todo.id === id) {
                todo.name = name;
            }
        })
        this.setState({todoList: todoList});
    }

    addTodoItem = (todoText) => {
        const todoList = this.state.todoList;
        todoList.push(this.constructTodo(todoText));
        this.setState({
            todoList: todoList
        })
    }

    render() {

        const todoList = this.state.todoList.map((todo) => {
            return <Todo key={todo.id} details={todo} updateTaskCompletionState={this.updateTaskCompletionState} updateTaskName={this.updateTaskName} />
        })

        return (
            <div className="app">
                <div className="row text-center">
                    <h1>todos</h1>
                </div>
                <div className="card">
                    <TodoForm addTodoItem={this.addTodoItem}/>
                    {todoList}
                    <TodoFilter activeCount={this.state.activeCount}/>
                </div>
            </div>
        );
    }
}

export default App;
