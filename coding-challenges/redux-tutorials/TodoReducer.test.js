import todoReducer from './TodoReducer'
import deepFreeze  from 'deep-freeze'



test('todo add', () => {
    const stateBefore = [];

    const action = {
        type: 'ADD'
        , text: 'go fishing'
        , id: 0
    }

    deepFreeze(stateBefore);
    deepFreeze(action);

    const stateAfter = [{text: 'go fishing', completed: false, id:0}];
    expect(todoReducer(stateBefore, action)).toEqual(stateAfter);
})


test('todo toggle', () => {

    const stateBefore = [{id: 0, text: 'go fishing', completed: false}, {id: 1, text: 'go hunting', completed: true}];

    const actionTrue = {
        type: 'TOGGLE'
        , id: 0
    }

    deepFreeze(stateBefore);
    deepFreeze(actionTrue);

    let stateAfter = [{id: 0, text: 'go fishing', completed: true}, {id: 1, text: 'go hunting', completed: true}];
    expect(todoReducer(stateBefore, actionTrue)).toEqual(stateAfter);

    const actionFalse = {
        type: 'TOGGLE'
        , id: 1
    }

    stateAfter = [{id: 0, text: 'go fishing', completed: false}, {id: 1, text: 'go hunting', completed: false}];
    expect(todoReducer(stateBefore, actionFalse)).toEqual(stateAfter);

})
