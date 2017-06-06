import React, {Component} from 'react'
import BasicUserInfo from './BasicUserInfo'

class UserSearchResults extends Component {


    render() {
        return (
            <div className="grid-container">
                <div className="row">
                    <div className="small-12 columns">

                        {
                            ([0,1,2,3,4,5,6,7,8,9]).map((val, index) => {
                                return (
                                    <BasicUserInfo key={index} />
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
