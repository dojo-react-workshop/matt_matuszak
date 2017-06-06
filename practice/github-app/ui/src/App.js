import React, {Component} from 'react';
import AppCSS from './App.css'
import SearchForm from './SearchForm'
import UserSearchResults from './UserSearchResults'
import UserDetails from './UserDetails'

class App extends Component {


    executeSearch = (searchParams) => {
        console.log('Search Executed!', searchParams)
    }



    render() {
        return (
            <div className="app">

                <div className="row">
                    <div className="small-12 medium-12 columns">
                        <SearchForm executeSearch={this.executeSearch} />
                    </div>
                    <hr />
                </div>

                <div className="row">
                    <div className="small-12 medium-12 columns">
                        <UserSearchResults />
                    </div>
                    <hr />
                </div>

                <div className="row">
                    <div className="small-12 medium-12 columns">
                        <UserDetails />
                    </div>
                </div>

            </div>
        );
    }
}

export default App;
