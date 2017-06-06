import React, {Component} from 'react';
import './App.css'
import SearchForm from './SearchForm'
import UserSearchResults from './UserSearchResults'
import UserDetails from './UserDetails'
import {BrowserRouter as Router, Route, Redirect } from 'react-router-dom';

import axios from 'axios'

class App extends Component {

    state = {
        userSearchResults: [],
        searched: false
    }

    executeSearch = (searchParams) => {
        console.log('Search Executed!', searchParams)
        axios.get(`/api/github/user-search`, {params: searchParams}).then((response) => {
            console.log('user-search response-->', response)
            this.setState({userSearchResults: response.data.items, searched: true})
        }).catch((error) => {
            console.log('error performing user search-->', error);
        })

    }

    render() {
        return (
            <div className="app">

                <div className="row">
                    <div className="small-12 columns">
                        <SearchForm executeSearch={this.executeSearch}/>
                    </div>
                    <hr/>
                </div>
                <Router>
                    <div>
                        <div className="row">
                            <div className="small-12 columns">
                                <UserSearchResults users={this.state.userSearchResults} searched={this.state.searched}/>
                            </div>
                            <hr/>
                        </div>

                        <div className="row">
                            <div className="small-12 columns">
                                <Route path="/:login/details" render={(props) => {

                                    if (this.state.userSearchResults.length <= 0) {
                                        return <Redirect to="/" />
                                    } else {
                                        return <UserDetails {...props} login={props.match.params.login} />
                                    }

                                }}/>
                            </div>
                        </div>
                    </div>
                </Router>
            </div>
        );
    }
}

export default App;
