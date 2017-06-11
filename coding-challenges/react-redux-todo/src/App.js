import React, {Component} from 'react';

import TaskFormContainer from './containers/TaskFormContainer'
import FilterContainer from './containers/FilterContainer'
import TodoListContainer from './containers/TodoListContainer'

class App extends Component {
    render() {
        return (
            <div className="App">
                <h1>Todos App</h1>
                <TaskFormContainer />
                <FilterContainer />
                <TodoListContainer />
            </div>
        );
    }
}

export default App;
