import React, {Component} from 'react'

class Form extends Component {

    constructor(props) {
        super(props);
        this.state = {
            todo: ''
        }
    }


    add = (event) => {
        console.log('adding item', this.state.todo)
        this.props.addTodoItem(this.state.todo);
        event.preventDefault();
        this.setState({todo: ''})
        this.refs.todoInput.value = ''
    }

    updateTodoText = (event) => {
        this.setState( { todo: event.target.value} );
    }

    render() {

        return (
            <div className="row">
                <span className="icon icon-caret-down medium-1 columns valign-middle text-dark-grey text-center" style={{fontSize: '2em'}}></span>
                <form onSubmit={this.add}>
                    <input type="text" className="medium-11 columns" placeholder="What needs to be done?" onChange={this.updateTodoText} ref="todoInput"></input>
                    {/* <input type="submit" style="display: none" /> */}
                </form>
                <hr />
            </div>
        )
    }
}

export default Form
