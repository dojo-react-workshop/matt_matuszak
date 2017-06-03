import React, {Component} from 'react'

class Todo extends Component {

    updateCompletionState = (event) => {
        // console.log('complete task was checked for', this.props);
        this.props.updateTaskCompletionState(this.props.details.id, event.target.checked);
    }

    updateName = (event) => {
        this.props.updateTaskName(this.props.details.id, event.target.value);
    }

    delete = () => {
        this.props.deleteTodo(this.props.details.id);
    }

    render() {

        return (
            <tr>
                <td>
                    <input type="checkbox" className="text-center valign-middle" checked={this.props.details.completed} onChange={this.updateCompletionState}/>
                </td>
                <td>
                    <input type="text" value={this.props.details.name} onChange={this.updateName}/>
                </td>
                <td>
                    <span onClick={this.delete} className="icon icon-close medium-1 valign-middle text-center" style={{fontSize: '2em', color: 'red'}}></span>
                </td>
            </tr>
        )
    }
}

export default Todo
