import React, {Component} from 'react'
import BasicUserInfo from './BasicUserInfo'
import PropTypes from 'prop-types';

const UserSearchResults = (props) => {

    const userInfoList = props.users.map((user, index) => {
        return <BasicUserInfo key={index} user={user}/>
    });

    return (
        <div className="grid-container">
            <div className="row">
                <div className="small-12 columns">
                    {userInfoList}
                </div>

            </div>
        </div>
    )
}

UserSearchResults.propTypes = {
    users: PropTypes.array.isRequired
}

export default UserSearchResults
