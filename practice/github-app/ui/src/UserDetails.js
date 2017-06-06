import React, {Component} from 'react'

class UserDetails extends Component {


    render() {
        return (
                <div className="grid-container">
                    <div className="row">
                        <div className="small-12 medium-12 columns">
                            <h2>Matt Matuszak</h2>
                            <img src="https://avatars2.githubusercontent.com/u/7598330?v=3" />
                            <p>Member since: 2014-05-16T02:05:10Z</p>
                            <p><a href="https://github.com/mattmatuszak"></a></p>
                        </div>
                    </div>
                </div>
        )
    }
}

export default UserDetails
