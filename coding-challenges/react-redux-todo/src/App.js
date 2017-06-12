import React, {Component} from 'react';

import TaskForm from './components/TaskForm'
import FilterContainer from './containers/FilterContainer'
import TodoList from './components/TodoList'

class App extends Component {
    render() {
        return (
            <div className="App">
                <h1>Todos App</h1>
                <TaskForm />
                <FilterContainer />
                <TodoList />
            </div>
        );
    }
}

export default App;
