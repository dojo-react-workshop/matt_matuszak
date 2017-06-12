import React from 'react'
import { connect } from 'react-redux'

import TaskService from '../services/TodoService'

class TaskForm extends React.Component {

    constructor(props) {
        super(props);
        this.taskService = new TaskService();
    }

    state = {
        task: ''
    }

    formChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    submit = (event) => {
        event.preventDefault();
        console.log('TaskFormContainer.submit()-->', this.props.state)

        this.taskService.addTodo(this.state.task)
            .then(response => {
                // console.log('Yea, it worked!', response.data);
                this.props.dispatch({
                    type: 'TODO_CREATED'
                    , todo: response.data
                })

                this.setState({
                    task: ''
                })
            })
            .catch(error => {
                console.log(error);
            })
    }

    render() {
        return (
                <div className="gridContainer">
                    <form onSubmit={this.submit}>
                    <div className="row">
                        <div className="small-9 large-10 columns" style={{paddingRight: '0px'}}>
                            <input
                                type="text"
                                name="task"
                                placeholder="enter new task"
                                value={this.state.task}
                                onChange={this.formChange}
                                className="with-postfix"
                                />
                        </div>
                        <div className="small-3 large-2 columns" style={{paddingLeft: '0px'}}>
                            <button type="submit" className="postfix">Add</button>
                        </div>
                    </div>
                </form>
                </div>
        );
    }
}

export default connect()(TaskForm)
