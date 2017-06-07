import React, {Component} from 'react';

import axios from 'axios'

class UserDetails extends Component {

    state = {
        details: null
    }

    componentWillReceiveProps() {
        this.setState({details: null})
    }

    componentDidUpdate() {
        this.componentDidMount();
    }

    componentDidMount() {
        // console.log('UserDetails.componentDidMount() username -->', this.props.match)
        // console.log('UserDetails.componentDidMount() url -->', `https://api.github.com/users/${this.props.match.username}`)
        axios.get(`https://api.github.com/users/${this.props.match.params.username}`).then((response) => {
            // console.log('UserDetails.componentDidMount()', response.data)
            this.setState({details: response.data})
        })
    }

    render() {

        console.log('UserDetails.() props -->', this.props)

        if (this.state.details === null)
            return <div>Loading...</div>

        return (
            <div>
                <h3>Github User Details:</h3>
                <div className="card">
                    <div className="row">
                        <div className="small-4 columns">
                            <img src={this.state.details.avatar_url} alt="avitar"/>
                        </div>
                        <div className="small-8 columns">
                            <p>Login: {this.state.details.login}</p>
                            <p>Name: {this.state.details.name}</p>
                            <p>Id: {this.state.details.id}</p>
                            <p>Type: {this.state.details.type}</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

export default UserDetails
