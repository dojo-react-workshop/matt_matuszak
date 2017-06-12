import React, {Component} from 'react';

import TaskForm from './components/TaskForm'
import FilterContainer from './containers/FilterContainer'
import TodoListContainer from './containers/TodoListContainer'

class App extends Component {
    render() {
        return (
            <div className="App">
                <h1>Todos App</h1>
                <TaskForm />
                <FilterContainer />
                <TodoListContainer />
            </div>
        );
    }
}

export default App;
