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

        this.state = this.buildState('ALL', defaultList);
    }

    countActives = (todoList) => {
        return todoList.reduce((count, todo) => {
            return (todo.completed === false) ? count+1 : count ;
        }, 0)
    }

    countCompleted = (todoList) => {
        return todoList.reduce((count, todo) => {
            return (todo.completed) ? count+1 : count ;
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
        this.setState(this.buildState(this.state.filterOption, todoList));
    }

    updateAllTaskCompletions = (completionState) => {
        const currentList = this.state.todoList.map((todo) => {
            todo.completed = completionState;
            return todo;
        })

        this.setState(this.buildState(this.state.filterOption, currentList))
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
        this.setState(this.buildState(this.state.filterOption, todoList))
    }

    deleteTodo = (id) => {
        const list = this.state.todoList;
        for (var i = 0; i < list.length; i++) {
            if (list[i].id === id) {
                list.splice(i,1);
                break;
            }
        }

        this.setState(this.buildState(this.state.filterOption, list));
    }

    buildState = (filterOption = 'ALL', list = []) => {

        const appliedFilterToList = this.applyFilter(filterOption, list).filteredList;

        return {
            filterOption: filterOption
            , filteredList: this.applyFilter(filterOption, list).filteredList
            , todoList: list
            , activeCount: this.countActives(list)
            , completedCount: this.countCompleted(list)
        }
    }

    deleteAllCompleted  = () => {
        const todoList = this.state.todoList;
        const newTodoList = [];

        for(let i = 0; i < todoList.length; i++) {
            if (!todoList[i].completed) {
                newTodoList.push(todoList[i])
            }
        }

        this.setState(this.buildState(this.state.filterOption, newTodoList));

    }

    applyFilter = (filterOption, list = this.state.todoList) => {
        // let list = null;
        if (filterOption === 'ALL') {
            // list = this.state.todoList;
        } else {
            list = list.filter((todo) => {
                switch (filterOption) {
                    case 'COMPLETED':
                        return todo.completed;
                    case 'ACTIVE':
                        return !todo.completed;
                    default:
                        return true;
                }
            });
        }

        return {
            filterOption: filterOption
            , filteredList: list
        }
    }

    filterTodoList = (filterOption) => {
        this.setState(this.buildState(filterOption, this.state.todoList));
    }

    render() {

        const todoList = this.state.filteredList.map((todo) => {
            return <Todo key={todo.id} details={todo} deleteTodo={this.deleteTodo} updateTaskCompletionState={this.updateTaskCompletionState} updateTaskName={this.updateTaskName} />
        })

        return (
            <div className="app">
                <div className="row text-center">
                    <h1>todos</h1>
                </div>
                <div className="card">
                    <TodoForm updateAllTaskCompletions={this.updateAllTaskCompletions} addTodoItem={this.addTodoItem}/>
                    <hr />
                    <TodoFilter deleteAllCompleted={this.deleteAllCompleted} completedCount={this.state.completedCount} activeCount={this.state.activeCount} filterTodoList={this.filterTodoList}/>
                    <hr />
                    <div className="row">
                        <table className="table" role="grid">
                            <thead>
                                <tr><th>Completed</th><th>Task Name</th><th>{''}</th></tr>
                            </thead>
                            <tbody className="scrollable">
                                {todoList}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
