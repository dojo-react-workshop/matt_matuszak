import React, {Component} from 'react'

class Todo extends Component {

    updateCompletionState = (event) => {
        // console.log('complete task was checked for', this.props);
        this.props.updateTaskCompletionState(this.props.details.id, event.target.checked);
    }

    updateName = (event) => {
        this.props.updateTaskName(this.props.details.id, event.target.value);
    }

    render() {

        return (
            <tr className="actionable">
                <td>
                    <input type="checkbox" className="text-center valign-middle" checked={this.props.details.completed} onChange={this.updateCompletionState}/>
                </td>
                <td>
                    <input type="text" value={this.props.details.name} onChange={this.updateName}/>
                </td>
            </tr>
        )
    }
}

export default Todo
