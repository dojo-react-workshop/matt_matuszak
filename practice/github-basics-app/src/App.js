import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Redirect} from 'react-router-dom'

import './App.css';

import axios from 'axios'

import SearchForm from './SearchForm'
import UserDetails from './UserDetails'
import SearchResults from './SearchResults'

class App extends Component {

    state = {
        searchResults: []
    }

    search = (params) => {
        axios.get(`https://api.github.com/search/users?q=${params.username}+in:login`).then((response) => {
            console.log('App.search() search response -->', response.data)
            this.setState({searchResults: response.data.items})
        }).catch((error) => {
            console.log('SearchForm.search() -->', error)
        })
    }

    render() {
        return (
            <div className="App">
                <h1>React Basics App</h1>

                <Router>
                    <div className="row">
                        <div className="small-4 columns">
                            <SearchForm search={this.search}/> {(this.state.searchResults.length > 0)
                                ? <SearchResults searchResults={this.state.searchResults}/>
                                : null}
                        </div>
                        <div className="small-8 columns">
                            {
                                (this.state.searchResults.length > 0)
                                ? <Route path='/:username/details' component={UserDetails} />
                                : <Redirect to='/' />
                            }

                        </div>
                    </div>
                </Router>

                <div className="row"></div>
            </div>
        );
    }
}

export default App;
