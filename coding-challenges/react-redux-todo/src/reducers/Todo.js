class TodoService {


    static add(text) {
        return {
            id: Math.floor(Math.random()*100000)
            , text: text
            , completed: false
            , created: new Date()
        }
    }

    static conditionalToggle(id, newCompleted, todo) {
        if(id === todo.id) {
            todo.completed = newCompleted;
            return todo
        } else return todo;
    }
}



export const Todo = (state = [], action) => {
    switch (action.type) {
        case 'TODO_ADD':
            return [
                ...state
                , TodoService.add(action.text)
            ]
        case 'TODO_TOGGLE':
            return state.map((todo) => {
                return TodoService.conditionalToggle(action.id, action.completed, todo)
            })
        default:
            return state;
    }
}
