import React, {Component} from 'react';
import AppCSS from './App.css'
import SearchForm from './SearchForm'
import UserSearchResults from './UserSearchResults'
import UserDetails from './UserDetails'

class App extends Component {
    render() {
        return (
            <div className="app">

                <div className="row">
                    <div className="small-12 medium-12 columns">
                        <SearchForm />
                    </div>
                </div>

                <div className="row">
                    <div className="small-12 medium-12 columns">
                        <UserSearchResults />
                    </div>
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
