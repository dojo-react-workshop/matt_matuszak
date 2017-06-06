import React, {Component} from 'react'
import BasicUserInfo from './BasicUserInfo'
import PropTypes from 'prop-types';

const UserSearchResults = (props) => {

    let userInfoList = props.users.map((user, index) => {
        return <BasicUserInfo key={index} user={user}/>
    });

    if (userInfoList.length === 0 && !props.searched) {
        userInfoList = <h3>Please enter a search in the form</h3>
    } else if (userInfoList.length === 0 && props.searched) {
        userInfoList = <h3>No results found! Please enter a new search criteria</h3>
    }

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
    users: PropTypes.array.isRequired,
    searched: PropTypes.bool.isRequired
}

export default UserSearchResults
