import React, {Component} from 'react'

class BasicUserInfo extends Component {


    render() {
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
    }
}

export default BasicUserInfo
