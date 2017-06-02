import React, {Component} from 'react';
import TodoForm from './Form';
import TodoList from './List';
import TodoFilter from './Filter';
import StyleOverrides from './StyleOverrides.css'

class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            todoList: [{completed: false, name: 'go fishing'}, {completed: false, name: 'go hunting'}, {completed: false, name: 'mow lawn'}]
        }
    }

    render() {

        const todoList = this.state.todoList.map((todo) => {
            return <TodoList details={todo} />
        })

        return (
            <div className="app">
                <div className="row text-center">
                    <h1>todos</h1>
                </div>
                <div className="card">
                    <TodoForm/>
                    {todoList}
                    <TodoFilter/>
                </div>
            </div>
        );
    }
}

export default App;
