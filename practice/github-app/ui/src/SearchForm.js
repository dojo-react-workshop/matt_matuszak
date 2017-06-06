import React, {Component} from 'react'

class SearchForm extends Component {

    state = {
        userOption: 'login'
        , searchQuery: ''
    }

    formDataChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    executeSearch = (event) => {
        event.preventDefault();
        this.props.executeSearch(this.state)
    }

    render() {
        return (
                <form onSubmit={this.executeSearch}>
                    <div className="small-12 large-12 columns small-centered">
                        <h1>Search for Github Users</h1>
                    </div>
                    <div className="small-3 large-2 columns">
                        <select name="userOption" className="prefix" onChange={this.formDataChange}>
                            <option value="login">Login</option>
                            <option value="email">Email</option>
                            <option value="fullname">Full Name</option>
                        </select>
                    </div>
                    <div className="small-7 large-8 columns">
                        <input type="text" name="searchQuery" className="with-prefix with-postfix" onChange={this.formDataChange} placeholder="Enter Search Criteria"/>
                    </div>
                    <div className="small-2 large-2 columns">
                        <button type="submit" className="postfix">Search</button>
                    </div>
                </form>
        )
    }
}

export default SearchForm
