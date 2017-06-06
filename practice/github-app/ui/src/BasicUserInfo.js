import React, {Component} from 'react'
import PropTypes from 'prop-types';

const BasicUserInfo = (props) => {

    return (
        <ul className="vcard">
            <li>
                <a href={props.user.html_url}>{props.user.login}</a>
            </li>
            <li>
                <img src={props.user.avatar_url} style={{
                    width: '50px'
                }}></img>
            </li>
        </ul>
    )
}

BasicUserInfo.propTypes = {
    user: PropTypes.shape({
        html_url: PropTypes.string.isRequired
        , login: PropTypes.string.isRequired
        , avatar_url: PropTypes.string.isRequired
    }).isRequired
}

export default BasicUserInfo
