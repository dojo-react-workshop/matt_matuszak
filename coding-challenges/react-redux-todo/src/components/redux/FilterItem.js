import React from 'react'
import {connect} from 'react-redux'

const FilterItem = ({dispatch, filter, option}) => {

    function filterChange() {
        console.log('FilterItem.filterChange() -->', option)
        dispatch({type: 'TODO_FILTER', filter: option})
    }

    console.log('FilterItem() filter-->', filter)
    const cssClass = (filter === option) ? 'active' : ''

    return (
        <li className={cssClass}>
            <button onClick={filterChange}>{option}</button>
        </li>
    );
}

const mapStateToProps = (state) => {
    return {
        filter: state.filter
    }
}

export default connect(mapStateToProps, null)(FilterItem)
