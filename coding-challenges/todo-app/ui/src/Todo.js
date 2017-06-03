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
            <div className="row">
                <div className="row">
                    <div className="medium-1 text-center columns">
                        <input type="checkbox" className="listMargin" checked={this.props.details.completed} onChange={this.updateCompletionState} />
                    </div>
                    <div className="medium-11 columns listPadding">
                        <input type="text" value={this.props.details.name} onChange={this.updateName}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Todo
