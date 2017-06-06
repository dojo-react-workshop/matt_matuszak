import React, {Component} from 'react';
import AppCSS from './App.css'
import SearchForm from './SearchForm'
import UserSearchResults from './UserSearchResults'
import UserDetails from './UserDetails'
import axios from 'axios'

class App extends Component {

    state = {
        userSearchResults: []
    }

    executeSearch = (searchParams) => {
        console.log('Search Executed!', searchParams)
        axios
        .get(`/api/github/user-search`, {params: searchParams})
        .then((response) => {
            console.log('user-search response-->', response)
            this.setState( {userSearchResults: response.data.items} )
        })
        .catch((error) => {
            console.log('error performing user search-->', error);
        })

    }



    render() {
        return (
            <div className="app">

                <div className="row">
                    <div className="small-12 columns">
                        <SearchForm executeSearch={this.executeSearch} />
                    </div>
                    <hr />
                </div>

                <div className="row">
                    <div className="small-12 columns">
                        <UserSearchResults users={this.state.userSearchResults} />
                    </div>
                    <hr />
                </div>

                <div className="row">
                    <div className="small-12 columns">
                        <UserDetails />
                    </div>
                </div>

            </div>
        );
    }
}

export default App;
