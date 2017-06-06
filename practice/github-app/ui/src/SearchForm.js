import React, {Component} from 'react'

class SearchForm extends Component {


    render() {
        return (
                <form>
                    <div className="small-12 large-12 columns small-centered">
                        <h1>Search for Github Users</h1>
                    </div>
                    <div className="small-3 large-2 columns">
                        <select className="prefix">
                            <option value="login">Login</option>
                            <option value="email">Email</option>
                            <option value="fullname">Full Name</option>
                        </select>
                    </div>
                    <div className="small-9 large-10 columns">
                        <input type="text" className="with-prefix" placeholer="Enter Search Criteria"/>
                    </div>
                </form>
        )
    }
}

export default SearchForm
