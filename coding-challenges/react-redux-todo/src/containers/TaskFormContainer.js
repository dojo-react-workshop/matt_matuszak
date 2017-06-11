import React from 'react'
import { connect } from 'react-redux'

class TaskFormContainer extends React.Component {


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
        this.props.dispatch({
            type: 'TODO_ADD'
            , text: this.state.task
        })

        this.setState({
            task: ''
        })
    }

    render() {
        return (
                <div>
                    <form onSubmit={this.submit}>
                        <input
                            type="text"
                            name="task"
                            placeholder="enter new task"
                            value={this.state.task}
                            onChange={this.formChange}
                            className="inline"/>
                        <button className="inline" type="submit">Add</button>
                    </form>
                </div>
        );
    }
}

export default connect()(TaskFormContainer)
