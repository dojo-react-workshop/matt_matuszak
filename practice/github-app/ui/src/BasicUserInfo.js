import React, {Component} from 'react'
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'

const BasicUserInfo = (props) => {

    return (
        <ul className="vcard">
            <li>
                <Link to={`/${props.user.login}/details`}>Details: {props.user.login}</Link>
            </li>
            <li><a href={props.user.html_url} target="_blank">{props.user.login} on Github</a></li>
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
