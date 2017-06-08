

class TodoActions {
    static add = (action) => {
        return {
            text: action.text,
            completed: false,
            id: action.id
        }
    }

    static toggle = (id, todo) => {
        if (todo.id !== id) {
            return todo
        } else {
            return {
                ...todo
                , completed: !todo.completed
            }
        }
    }
}



const TodoReducer = (state = [], action) => {

    switch(action.type) {
        case 'ADD':
            return ([
                ...state, TodoActions.add(action)
            ])
        case 'TOGGLE':
            return(
                state.map((todo) => TodoActions.toggle(action.id, todo))
            )
        default: return state;
    }
}

export default TodoReducer
