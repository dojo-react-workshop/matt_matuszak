import React, {Component} from 'react';

class SearchForm extends Component {

    state = {
        username: ''
    }

    formChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    search = (event) => {
        event.preventDefault();
        this.props.search(this.state);
    }

    render() {
        return (
            <div>
                <h2>Search GitHub</h2>
                <form onSubmit={this.search}>
                    <label>User Name</label>
                    <input type="text" name="username" value={this.state.username} onChange={this.formChange} placeholder="Your placeholder"/>
                    <button className="tiny" type="submit" disabled={(this.state.username === '')} >Search</button>
                </form>
            </div>
        )
    }

}

export default SearchForm
