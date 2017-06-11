import React from 'react'
import {connect} from 'react-redux'

import dateFormat from 'dateformat';

const TodoItem = (props) => {

    function todoChange(event) {
        props.dispatch({type: 'TODO_TOGGLE', id: props.id, completed: event.target.checked})
    }

    return (
        <tr>
            <th><input type='checkbox' checked={props.completed} onChange={todoChange}/></th>
            <th>{props.text}</th>
            <th>{dateFormat(props.created, 'default')}</th>
            <th>{props.id}</th>
        </tr>
    );
}

export default connect()(TodoItem)
