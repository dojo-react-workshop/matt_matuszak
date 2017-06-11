

export const Filter = (state = 'All', action) => {

    switch(action.type) {
        case 'TODO_FILTER':
            return action.filter;
        default: return state;
    }

}
