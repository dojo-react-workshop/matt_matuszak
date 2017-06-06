import React, {Component} from 'react'
import dateformat from 'dateformat'
import axios from 'axios'

class UserDetails extends Component {

    constructor(props) {
        super(props)

        this.state = {
            user: null
        }
    }

    componentDidMount() {
        console.log('UserDetails.componentDidMount()-->', this.props.login)

        axios.get(`https://api.github.com/users/${this.props.login}`).then((response) => {
            console.log(response.data)
            this.setState({user: response.data})
        })
    }

    componentDidUpdate() {
        console.log("UserDetails.componentDidUpdate()", this.state, this.props)
        if (this.state.user === null) {
            this.componentDidMount();
        }
    }

    componentWillReceiveProps(nextProps) {
        console.log('UserDetails.componentWillReceiveProps() nextProps -->', nextProps);
        this.setState({user: null})
    }

    render() {
        console.log('UserDetails.render()-->', this.state)
        if (this.state.user === null) {
            return (
                <div className="grid-container">
                    <div className="row">
                        <div className="small-12 medium-12 columns">
                            <div>Loading...</div>
                        </div>
                    </div>
                </div>
            )
        }

        if (this.state.user !== null) {

            return (
                <div className="grid-container">
                    <div className="row">
                        <div className="small-12 medium-12 columns">
                            <a target="_blank" href="https://github.com/mattmatuszak">
                                <h2>{(this.state.user.name) ? this.state.user.name : this.state.user.login }</h2>
                            </a>
                            <img src={this.state.user.avatar_url}/>
                            <p>Member Since{dateformat(this.state.user.created_at)}</p>
                            <p>Last Update{dateformat(this.state.user.updated_at)}</p>
                        </div>
                    </div>
                </div>
            )
        }
    }
}

export default UserDetails
