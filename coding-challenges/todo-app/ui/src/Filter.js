import React, {Component} from 'react'

class Filter extends Component {

    constructor(props) {
        super(props);

        this.state = {
            allButton: 'active',
            activeButton: '',
            completedButton: ''
        }
    }

    allFilter = () => {
        this.setState({allButton: 'active', activeButton: '', completedButton: ''})
        this.props.filterTodoList('ALL');
    }

    activeFilter = () => {
        this.setState({allButton: '', activeButton: 'active', completedButton: ''});
        this.props.filterTodoList('ACTIVE');
    }

    completedFilter = () => {
        this.setState({allButton: '', activeButton: '', completedButton: 'active'});
        this.props.filterTodoList('COMPLETED');

    }

    deleteAllCompleted = () => {
        this.props.deleteAllCompleted();
    }

    render() {
        return (
            <div className="row">
                <div className="medium-2 columns align-middle">
                    <span className="valign-middle itemsRemaining">{this.props.activeCount + ' '}
                        item(s) left</span>
                </div>
                <div className="medium-7 columns">
                    {/* <div className="row"> */}
                    <ul className="button-group secondary tiny even-3">
                        <li className={this.state.allButton}>
                            <button onClick={this.allFilter}>All</button>
                        </li>
                        <li className={this.state.activeButton}>
                            <button onClick={this.activeFilter}>Active</button>
                        </li>
                        <li className={this.state.completedButton}>
                            <button onClick={this.completedFilter}>Completed</button>
                        </li>
                    </ul>
                    {/* </div> */}
                </div>
                <div className="medium-3 columns">
                    <button onClick={this.deleteAllCompleted} className={'tiny' + ( (this.props.completedCount) ? '': ' disabled' ) }>Clear Completed</button>
                </div>
            </div>
        )
    }
}

export default Filter
