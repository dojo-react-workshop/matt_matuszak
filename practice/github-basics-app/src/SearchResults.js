import React from 'react';
import {Link} from 'react-router-dom'

const SearchResultItem = (props) => {
    return (

        <tr>
            <td>
                <Link to={`/${props.data.login}/details`}>{props.data.login}</Link>
            </td>
            <td>
                <Link to={`/${props.data.login}/details`}>{props.data.score}</Link>
            </td>
        </tr>

    )
}

const SearchResults = (props) => {

    return (
        <table className="table scrollable">
            <thead>
                <tr>
                    <th>Login</th>
                    <th>Score</th>
                </tr>
            </thead>
            <tbody style={{
                height: '250px'
            }}>
                {props.searchResults.map((val, index) => {
                    return <SearchResultItem key={index} data={val}/>
                })}
            </tbody>

        </table>
    )

}

export default SearchResults
