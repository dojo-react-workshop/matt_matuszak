class TodoService {

    static conditionalToggle(id, newCompleted, todo) {
        if(id === todo.id) {
            todo.completed = newCompleted;
            return todo
        } else return todo;
    }
}



export const Todo = (state = [], action) => {
    switch (action.type) {
        case 'TODO_CREATED':
            return { createdTodo: action.todo }
        case 'TODO_TOGGLE':
            return state.map((todo) => {
                return TodoService.conditionalToggle(action.id, action.completed, todo)
            })
        default:
            return state;
    }
}
