import React, {Component} from 'react'
import BasicUserInfo from './BasicUserInfo'

class UserSearchResults extends Component {


    render() {
        return (
            <div className="grid-container">
                <div className="row">
                    <div className="small-12 columns">

                        {
                            ([0,1,2,3,4,5,6,7,8,9]).map((val) => {
                                return (
                                    <ul className="vcard">
                                        <li>
                                            <a href="https://github.com/mattmatuszak">Andy Schneider</a>
                                        </li>
                                        <li>Login: mattmatuszak</li>
                                        <li>
                                            <img src="https://avatars2.githubusercontent.com/u/7598330?v=3" style={{
                                                width: '50px'
                                            }}></img>
                                        </li>
                                    </ul>
                                )
                            })
                        }
                    </div>

                </div>
            </div>
        )
    }
}

export default UserSearchResults
