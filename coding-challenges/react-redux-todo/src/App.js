import React, {Component} from 'react';

import TaskFormContainer from './containers/TaskFormContainer'
import TodoListContainer from './containers/TodoListContainer'

class App extends Component {
    render() {
        return (
            <div className="App">
                <h1>Todos App</h1>
                <TaskFormContainer />
                <TodoListContainer />
            </div>
        );
    }
}

export default App;
